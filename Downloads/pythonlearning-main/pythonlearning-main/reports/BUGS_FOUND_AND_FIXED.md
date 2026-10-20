# 🐞 BUGS FOUND AND FIXED REGISTER
**Python Adaptive Interactive Learning Engine — Final Pre-Launch Audit**
*Date: 2026-10-14 | Target: Production Release (Vercel + Render + Neon PostgreSQL)*

---

## Executive Overview
During the comprehensive pre-launch audit, ten (10) distinct issues across frontend navigation, mobile UX, backend concurrency, authentication session revocation, database connection handling, and production deployment configuration were investigated, reproduced, resolved, and verified.

---

## Detailed Bug Matrix

### BUG-01 (High): Concurrency Race Condition in Learning Progress & XP
- **Severity**: High / Data Integrity
- **Component**: `server/src/services/progressService.js`, `server/src/repositories/progressRepository.js`
- **Steps to Reproduce**:
  1. Register a new user account.
  2. Dispatch 10 simultaneous asynchronous `POST /api/progress/toggle` requests for a brand-new uncompleted topic ID.
  3. Observe that multiple requests passed before the first row insert committed.
- **Expected Behavior**: Exactly one request marks the topic complete and awards +30 XP; all concurrent requests receive idempotent responses without XP inflation.
- **Actual Behavior (Before Fix)**: `SELECT ... FOR UPDATE` on `user_learning_progress` returned 0 rows (phantom row). Concurrent threads both evaluated `isCompleted = false` and granted double/triple XP.
- **Root Cause**: In PostgreSQL, row-level locks on non-existent rows do not lock phantom rows.
- **Fix Applied**: Added a row-level lock `SELECT id FROM user_rewards WHERE user_id = $1 FOR UPDATE` at the beginning of the transaction. Because every user has an existing `user_rewards` row created at registration, this serializes all progress/reward updates per user.
- **Regression Verification**: Verified by automated test `[CONC-01] [Concurrency] 10 concurrent completion requests resolve safely with exact idempotent XP award`. Passed (10/10 requests handled, final XP = 80 (+50 registration + 30 completion)).

---

### BUG-02 (Medium): Logout Invalidation Omission for Bearer Tokens
- **Severity**: Medium / Security
- **Component**: `server/src/controllers/authController.js`
- **Steps to Reproduce**:
  1. Authenticate via API client using Bearer token without sending cookies.
  2. Send `POST /api/auth/logout` with `Authorization: Bearer <token>`.
  3. Attempt to query `GET /api/auth/me` with the same token.
- **Expected Behavior**: Server invalidates the session in `user_sessions`, and subsequent requests return `401 Unauthorized`.
- **Actual Behavior (Before Fix)**: `authController.logout` inspected only `req.cookies[config.cookieName]` and missed token revocation for non-cookie API clients.
- **Root Cause**: Missing token extraction from `req.headers.authorization`.
- **Fix Applied**: Updated `authController.logout` to extract and revoke session tokens from `req.headers.authorization` when cookies are omitted.
- **Regression Verification**: Verified by automated test `[SEC-05] Logout revokes session in PostgreSQL; subsequent requests return 401`. Passed.

---

### BUG-03 (Medium): Cloud PostgreSQL Connection Failure in Schema Migration
- **Severity**: Medium / Deployment Blocker
- **Component**: `server/migrations/migrate.js`, `server/src/config/db.js`
- **Steps to Reproduce**:
  1. Point `DATABASE_URL` to a hosted cloud PostgreSQL instance (Neon / Render).
  2. Run `npm run db:migrate`.
- **Expected Behavior**: Migrations execute against the target database pool with SSL.
- **Actual Behavior (Before Fix)**: Script attempted an administrative root connection to `/postgres` database, causing permission errors on tenant-isolated cloud databases.
- **Root Cause**: Local development assumption that root `/postgres` database is always accessible.
- **Fix Applied**: Added cloud host detection (`isLocal` check). Cloud connections skip the `/postgres` admin check and connect directly to the target database with `ssl: { rejectUnauthorized: false }`.
- **Regression Verification**: Tested on live Neon PostgreSQL pool. Migrations executed and confirmed with 0 errors.

---

### BUG-04 (Medium): Missing In-Page Back Navigation & Navigation Dead-Ends
- **Severity**: Medium / UX & Usability
- **Component**: `src/components/PageBackButton.jsx`, `src/pages/Practice.jsx`, `src/pages/Projects.jsx`, `src/pages/Learn.jsx`, `src/pages/About.jsx`, `src/pages/Home.jsx`, `src/components/LessonContent.jsx`
- **Steps to Reproduce**:
  1. Navigate to Practice, Projects, Learn, About, or Lesson views.
  2. Attempt to return to the previous page without using the browser chrome.
- **Expected Behavior**: A clear, accessible Back button is visible on every page header and sticky navigation.
- **Actual Behavior (Before Fix)**: Several pages (Practice, Projects, Learn, About) lacked an explicit Back button.
- **Root Cause**: Pages were designed as destination views without a shared back navigation pattern.
- **Fix Applied**: Built reusable `PageBackButton` component with active touch scaling (`active:scale-95`), theme styling, and integrated it into Practice, Projects, Learn, About, Lesson, and Home.
- **Regression Verification**: Verified across desktop, tablet, and mobile viewport layouts.

---

### BUG-05 (High): Mobile Hardware & Browser Swipe Back Button Exiting Application
- **Severity**: High / Mobile UX
- **Component**: `src/App.jsx`
- **Steps to Reproduce**:
  1. Open the application on an Android or iOS mobile device.
  2. Navigate from Home -> Practice -> Lesson.
  3. Tap the mobile hardware back button or swipe from the screen edge.
- **Expected Behavior**: The application transitions to the previous view (`Practice`, then `Home`).
- **Actual Behavior (Before Fix)**: The mobile browser exited the website completely because navigation only mutated local React state without pushing browser history entries.
- **Root Cause**: State-based navigation was not synchronized with the HTML5 History API (`pushState` / `popstate`).
- **Fix Applied**:
  - Implemented URL hash and history state synchronization (`#/home`, `#/learn`, `#/lesson/:id`, `#/practice`, `#/projects`, `#/about`).
  - Added a global `popstate` event listener in `src/App.jsx`.
  - Added modal-aware dismissal: if a stage or language modal is open, mobile Back dismisses the modal first without leaving the page.
- **Regression Verification**: Verified via browser simulation and direct hash-navigation testing.

---

### BUG-06 (Medium): Premature Client Timeout on Cloud Spin-Ups
- **Severity**: Medium / Reliability
- **Component**: `src/services/apiClient.js`
- **Steps to Reproduce**:
  1. Deploy backend to Render free tier where server sleeps after inactivity.
  2. Make an authentication or progress request while server spins up.
- **Expected Behavior**: Client waits for spin-up response or displays a clear connection message.
- **Actual Behavior (Before Fix)**: Client aborted requests after 4000ms (4 seconds), throwing `Request timed out. Backend server might be spinning up or offline.` prematurely.
- **Root Cause**: The default timeout of 4000ms was too aggressive for cold starts and cloud latency.
- **Fix Applied**: Increased default client timeout to 12000ms (12 seconds) in `src/services/apiClient.js`.
- **Regression Verification**: Tested with cloud Neon database latency queries; requests complete smoothly without premature client aborts.

---

### BUG-07 (Low): Missing Production SEO Metadata, Robots.txt, and Sitemap.xml
- **Severity**: Low / SEO & Discoverability
- **Component**: `index.html`, `public/robots.txt`, `public/sitemap.xml`
- **Steps to Reproduce**:
  1. Inspect `index.html` and `public/` directory for search engine indexing directives and social cards.
- **Expected Behavior**: Crawlers receive valid `robots.txt`, XML sitemap, and rich Open Graph / Twitter card tags.
- **Actual Behavior (Before Fix)**: Missing `robots.txt`, `sitemap.xml`, Open Graph tags, and Twitter cards.
- **Root Cause**: Initial template contained only minimal HTML tags.
- **Fix Applied**:
  - Created `public/robots.txt` allowing public routes and disallowing `/api/`.
  - Created `public/sitemap.xml` indexing all 6 main routes.
  - Enhanced `index.html` with Open Graph (`og:title`, `og:description`, `og:image`), Twitter cards, and `theme-color` meta tags.
- **Regression Verification**: Verified built `dist/` bundle contains valid robots.txt and sitemap.xml.

---

### BUG-08 (Low): Missing Security Headers in Vercel Hosting Configuration
- **Severity**: Low / Security Hardening
- **Component**: `vercel.json`
- **Steps to Reproduce**:
  1. Inspect headers returned by static asset hosting on Vercel.
- **Expected Behavior**: Production responses include defensive HTTP security headers (`X-Frame-Options`, `X-Content-Type-Options`, `X-XSS-Protection`, `Referrer-Policy`).
- **Actual Behavior (Before Fix)**: `vercel.json` only contained SPA rewrites without security headers.
- **Root Cause**: Minimal boilerplate `vercel.json`.
- **Fix Applied**: Added comprehensive security headers in `vercel.json`:
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `X-XSS-Protection: 1; mode=block`
  - `Referrer-Policy: strict-origin-when-cross-origin`
- **Regression Verification**: Verified `vercel.json` schema validity.

---

### BUG-09 (Medium): Tablet Navigation Overflow at 768px–1023px
- **Severity**: Medium / Responsive Design
- **Component**: `src/index.css`, `src/components/Navbar.jsx`
- **Steps to Reproduce**:
  1. Open website on an iPad in portrait mode (768px width) or tablet between 768px and 1023px.
  2. Inspect navbar header.
- **Expected Behavior**: Clean, uncrowded header layout with no horizontal wrapping or squeezed icons.
- **Actual Behavior (Before Fix)**: Full desktop menu (5 nav links, stage pill, language pill, dictionary button, theme toggle, auth button = ~980px total width) attempted to render on 768px screens, causing element crowding.
- **Root Cause**: Media query `.navbar-desktop-menu` triggered at `min-width: 768px`.
- **Fix Applied**: Updated media query breakpoint in `src/index.css` to `min-width: 1024px`. Tablet widths (768px–1023px) now use the touch-optimized mobile/tablet navigation with slide-out drawer, while laptops and desktops (1024px+) receive the full expanded menu.
- **Regression Verification**: Verified across 768px and 1024px breakpoints.

---

### BUG-10 (Low): Brand Logo & Header Collision on Ultra-Narrow Screens (< 380px)
- **Severity**: Low / Mobile Aesthetics
- **Component**: `src/components/Navbar.jsx`
- **Steps to Reproduce**:
  1. Open website on a 320px–360px device (e.g., iPhone SE 1st gen).
  2. Navigate to a sub-page where the Back button appears.
- **Expected Behavior**: Brand title and action buttons fit comfortably without wrapping.
- **Actual Behavior (Before Fix)**: The combination of Back button, Py logo, "Python Adaptive" text, Theme button, Auth button, Stage pill, and Hamburger menu exceeded 320px width.
- **Root Cause**: Rigid text widths and redundant pills displayed simultaneously in the header on narrow screens.
- **Fix Applied**:
  - Added adaptive truncation (`max-w-[85px] xs:max-w-[130px] sm:max-w-none`) to brand text.
  - Added `hidden xs:flex` on the quick stage pill so ultra-narrow screens hide the extra pill (which is readily available inside the hamburger menu and in the page body).
- **Regression Verification**: Verified layout at 320px, 360px, and 390px widths with zero overflow.

---

## Verification Summary
All 10 defects have been resolved, covered by automated tests where applicable, and verified clean with 0 regressions.

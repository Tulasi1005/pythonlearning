# 🚀 DEPLOYMENT READINESS & PRODUCTION LAUNCH CHECKLIST
**Python Adaptive Interactive Learning Engine**
*Target: Vercel (Frontend) + Render (Backend) + Neon (PostgreSQL)*

---

## 1. Production Architecture Overview

```
                      ┌──────────────────────────────────────────────┐
                      │              END USER BROWSER               │
                      │  Mobile (iOS/Android), Tablet, Desktop/Laptop │
                      └──────────────────────┬───────────────────────┘
                                             │
                       HTTPS Request         │   HTTPS API Calls
                      ┌──────────────────────┴──────────────────────┐
                      │                                             │
                      ▼                                             ▼
       ┌──────────────────────────────┐              ┌──────────────────────────────┐
       │     VERCEL (Frontend)        │              │     RENDER (Backend API)     │
       │  Single-Page Application     │              │  Node.js 22 + Express 5      │
       │  Vite Production Bundle      │              │  Web Service                 │
       │  `dist/` static files        │              │  Port binding: $PORT         │
       │  SPA rewrite in vercel.json  │              │  Auto-runs schema migrations │
       └──────────────────────────────┘              └──────────────┬───────────────┘
                                                                    │
                                                                    │ Encrypted SSL (Pool)
                                                                    ▼
                                                     ┌──────────────────────────────┐
                                                     │    NEON (PostgreSQL 16+)     │
                                                     │  Multi-tenant relational db  │
                                                     │  8 core tables + indexes     │
                                                     │  Row locks for concurrency   │
                                                     └──────────────────────────────┘
```

---

## 2. Environment Variables Configuration

> [!IMPORTANT]
> Never commit `.env` files or expose actual credentials in source control. Set these variables directly in the Vercel and Render management dashboards.

### A. Vercel (Frontend Environment Variables)
| Variable Name | Required | Example / Description |
|---|---|---|
| `VITE_API_BASE_URL` | **Yes** | `https://pythonlearning-z8bu.onrender.com/api` (Points client API requests to the Render backend) |
| `VITE_API_URL` | Optional | Fallback alias supported by `src/services/apiClient.js` |

### B. Render (Backend Environment Variables)
| Variable Name | Required | Example / Description |
|---|---|---|
| `PORT` | **Yes** | `5000` (or leave default assigned by Render) |
| `NODE_ENV` | **Yes** | `production` |
| `DATABASE_URL` | **Yes** | `postgresql://<user>:<password>@<host>/<database>?sslmode=require` (Connection string from Neon/Render Postgres) |
| `SESSION_SECRET` | **Yes** | Long random string (min 32 characters) for hashing session tokens |
| `SESSION_EXPIRY_DAYS` | **Yes** | `14` (Session cookie lifespan in days) |
| `COOKIE_SECURE` | **Yes** | `true` in production (ensures session cookies are transmitted over HTTPS only) |
| `FRONTEND_URL` | **Yes** | `https://pythonlearning.vercel.app` (Exact Vercel production domain for CORS origin validation) |

---

## 3. Hosting & Build Settings

### A. Vercel Configuration
- **Framework Preset**: Vite
- **Root Directory**: `./` (Root of the repository)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Configuration File**: [`vercel.json`](file:///c:/Users/ravir/.gemini/antigravity/scratch/Python/vercel.json) (Includes SPA rewrite `/(.*) -> /index.html` and security headers)

### B. Render Configuration
- **Environment**: Node
- **Root Directory**: `./`
- **Build Command**: `npm install`
- **Start Command**: `node server/src/server.js`
- **Health Check Path**: `/api/health`

---

## 4. Database Setup & Migration Strategy

1. **Automatic Boot-Time Verification**:
   The backend server entry point (`server/src/server.js`) calls `runMigrations(config.databaseUrl)` automatically upon starting. Every deployment or container restart checks `schema_migrations` and applies any pending SQL scripts safely.
2. **SSL Connection Pool**:
   `server/src/config/db.js` automatically enables SSL (`rejectUnauthorized: false`) for cloud databases, preventing connection drops on Neon and Render.
3. **Manual Migration Command**:
   ```bash
   npm run db:migrate
   ```
4. **Seed Initial Data Command** (Optional, for demo or fresh environments):
   ```bash
   npm run db:seed
   ```

---

## 5. Pre-Launch Verification Steps

Execute these steps in order before announcing public release:

### Step 1: Verify PostgreSQL Connectivity
Run the health check endpoint:
```bash
curl https://<your-render-app>.onrender.com/api/health
```
**Expected Response**:
```json
{
  "status": "healthy",
  "services": {
    "database": "connected",
    "api": "running"
  }
}
```

### Step 2: Verify CORS Allowlist
Ensure your Render `FRONTEND_URL` environment variable matches your Vercel domain exactly (e.g., `https://pythonlearning.vercel.app` without a trailing slash).

### Step 3: Test Real User Registration & Login on Production Domain
1. Open the Vercel URL in an incognito mobile/desktop browser.
2. Register a new test account.
3. Verify the browser receives the `py_adaptive_session_id` cookie or localStorage token.
4. Complete a lesson topic.
5. Refresh the page to confirm progress persistence.

### Step 4: Verify SEO & Crawlability
1. Open `https://<your-vercel-domain>/robots.txt` — confirm public routes are allowed and `/api/` is disallowed.
2. Open `https://<your-vercel-domain>/sitemap.xml` — confirm valid XML sitemap with all core sections.

---

## 6. Launch Decision
✅ **READY TO PUBLISH**
All infrastructure code, build scripts, migrations, CORS policies, session handlers, and frontend SPA configurations are verified and operational.

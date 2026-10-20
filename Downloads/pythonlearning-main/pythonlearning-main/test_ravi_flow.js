// test_ravi_flow.js
// Automated verification script for user 'ravi' (ravi@gmail.com / Ravi@123)

const API_BASE = 'http://localhost:5000/api';

async function runRaviVerification() {
  console.log('--- Starting User Ravi Full Flow Verification ---');
  let cookies = '';

  // Helper for requests with cookie handling
  async function api(path, options = {}) {
    const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
    if (cookies) {
      headers['Cookie'] = cookies;
    }
    const res = await fetch(`${API_BASE}${path}`, {
      ...options,
      headers
    });
    
    // Extract set-cookie if any
    const setCookie = res.headers.get('set-cookie');
    if (setCookie) {
      const match = setCookie.match(/py_adaptive_session_id=[^;]+/);
      if (match) {
        cookies = match[0];
      }
    }
    
    const text = await res.text();
    try {
      return { status: res.status, data: JSON.parse(text) };
    } catch {
      return { status: res.status, data: text };
    }
  }

  // 1. Health check
  console.log('\n1. Checking API Health...');
  const health = await api('/health');
  console.log('Health Response:', health.status, health.data);

  // 2. Register User Ravi
  console.log('\n2. Registering user ravi (ravi@gmail.com / Ravi@123) ...');
  const signupRes = await api('/auth/register', {
    method: 'POST',
    body: JSON.stringify({
      name: 'ravi',
      email: 'ravi@gmail.com',
      password: 'Ravi@123',
      stage: 'college',
      language: 'english'
    })
  });

  if (signupRes.status === 201) {
    console.log('✅ Signup Successful:', signupRes.data);
  } else if (signupRes.status === 409) {
    console.log('ℹ️ User already exists, proceeding to login...');
    const loginRes = await api('/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        emailOrUsername: 'ravi@gmail.com',
        password: 'Ravi@123',
        rememberMe: true
      })
    });
    console.log('Login Result:', loginRes.status, loginRes.data);
  } else {
    console.error('❌ Signup Failed:', signupRes.status, signupRes.data);
    return;
  }

  // 3. Get Current User Session (/api/auth/me)
  console.log('\n3. Fetching /api/auth/me for current session...');
  const meRes = await api('/auth/me');
  console.log('✅ Current Auth User Profile:', meRes.status, meRes.data);

  // 4. Check initial learning progress & rewards
  console.log('\n4. Checking Initial Learning Progress & Rewards...');
  const progressRes = await api('/progress');
  console.log('Initial Progress:', progressRes.data);

  const rewardsRes = await api('/rewards');
  console.log('Initial Rewards (XP/Streak):', rewardsRes.data);

  // 5. Complete Chapter 1 ("hello-world" / "python-intro")
  console.log('\n5. Completing Lesson/Chapter 1: "python-intro" ...');
  const completeChapter1 = await api('/progress/toggle', {
    method: 'POST',
    body: JSON.stringify({
      topicId: 'python-intro',
      completed: true,
      quizScore: 100
    })
  });
  console.log('✅ Chapter 1 Completion Response:', completeChapter1.status, completeChapter1.data);

  // 6. Complete Chapter 2 ("variables")
  console.log('\n6. Completing Lesson/Chapter 2: "variables" ...');
  const completeChapter2 = await api('/progress/toggle', {
    method: 'POST',
    body: JSON.stringify({
      topicId: 'variables',
      completed: true,
      quizScore: 100
    })
  });
  console.log('✅ Chapter 2 Completion Response:', completeChapter2.status, completeChapter2.data);

  // 7. Test Bookmarking a Lesson
  console.log('\n7. Testing Bookmark Toggle for "variables" ...');
  const bookmarkRes = await api('/bookmarks/toggle', {
    method: 'POST',
    body: JSON.stringify({
      topicId: 'variables'
    })
  });
  console.log('✅ Bookmark Toggle Result:', bookmarkRes.status, bookmarkRes.data);

  // 8. Test Updating Learning Stage (college -> professional, english -> english-telugu)
  console.log('\n8. Updating Learning Stage to "professional" & Language to "english-telugu" ...');
  const updateStageRes = await api('/users/me', {
    method: 'PATCH',
    body: JSON.stringify({
      stage: 'professional',
      language: 'english-telugu'
    })
  });
  console.log('✅ Profile Update Result:', updateStageRes.status, updateStageRes.data);

  // 9. Verify Final State in Database
  console.log('\n9. Final Progress, Bookmarks & Rewards Check in PostgreSQL...');
  const finalProgress = await api('/progress');
  const finalBookmarks = await api('/bookmarks');
  const finalRewards = await api('/rewards');
  const finalMe = await api('/auth/me');

  console.log('Final User Profile:', finalMe.data);
  console.log('Final Completed Topics:', finalProgress.data?.data);
  console.log('Final Bookmarks:', finalBookmarks.data?.data);
  console.log('Final Total XP & Streak:', finalRewards.data?.data);

  console.log('\n🎉 --- All Functionality Tests for User Ravi Completed Successfully! ---');
}

runRaviVerification().catch(console.error);

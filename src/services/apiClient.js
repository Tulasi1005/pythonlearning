/**
 * apiClient.js
 * Centralized HTTP API client with cookie credentials support,
 * error normalization, and timeout handling.
 */

// If running locally in browser (localhost / 127.0.0.1) and VITE_API_BASE_URL is not set or defaults to localhost
function resolveBaseUrl() {
  const envUrl = import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL;
  if (envUrl) return envUrl;
  
  if (typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")) {
    return "http://localhost:5000/api";
  }
  return "https://pythonlearning-z8bu.onrender.com/api";
}

const rawBaseUrl = resolveBaseUrl();
const cleanBaseUrl = rawBaseUrl.replace(/\/+$/, "");
const API_BASE_URL = cleanBaseUrl.endsWith("/api") ? cleanBaseUrl : `${cleanBaseUrl}/api`;

async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const token = typeof window !== "undefined" ? localStorage.getItem("py_token") : null;
  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers || {})
  };

  // 4 second timeout controller to avoid hanging on sleeping/offline servers
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), options.timeoutMs || 4000);

  const config = {
    ...options,
    headers,
    signal: controller.signal,
    credentials: "include" // Send and receive session cookies
  };

  try {
    const response = await fetch(url, config);
    clearTimeout(timeoutId);
    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const errorMsg = data.error || data.message || `Request failed with status ${response.status}`;
      const err = new Error(errorMsg);
      err.status = response.status;
      err.data = data;
      throw err;
    }

    return data;
  } catch (err) {
    clearTimeout(timeoutId);
    if (err.name === "AbortError") {
      const timeoutErr = new Error("Request timed out. Backend server might be spinning up or offline.");
      timeoutErr.status = 504;
      throw timeoutErr;
    }
    if (err.name === "TypeError" && err.message.includes("Failed to fetch")) {
      const offlineErr = new Error("Backend server is unreachable. Please verify the server is running.");
      offlineErr.status = 503;
      throw offlineErr;
    }
    throw err;
  }
}

export const apiClient = {
  get(endpoint, options = {}) {
    return request(endpoint, { ...options, method: "GET" });
  },

  post(endpoint, body, options = {}) {
    return request(endpoint, {
      ...options,
      method: "POST",
      body: JSON.stringify(body)
    });
  },

  patch(endpoint, body, options = {}) {
    return request(endpoint, {
      ...options,
      method: "PATCH",
      body: JSON.stringify(body)
    });
  },

  delete(endpoint, options = {}) {
    return request(endpoint, { ...options, method: "DELETE" });
  }
};

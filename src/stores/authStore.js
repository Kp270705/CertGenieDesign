import { writable } from 'svelte/store';
import routesType from '../config/backend_routes';

// Create the auth store
export const isAuthorized = writable(false);
export const authRoute = writable('Sign-In');
export const userData = writable(null);
export const showLoginToast = writable(false);

// Auth check function that can be used anywhere
export async function checkAuth() {
  try {
    const token = localStorage.getItem("jwt_token");
    
    if (!token) {
      isAuthorized.set(false);
      authRoute.set('Sign-In');
      userData.set(null);
      return false;
    }

    const res = await fetch(`${routesType.current_route}/resources/token`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    const data = await res.json();

    if (res.status === 401 || res.status === 422) {
      console.warn(`❌ Token issue: ${data.error}`);
      isAuthorized.set(false);
      authRoute.set('Sign-In');
      userData.set(null);
      // Clear invalid token
      localStorage.removeItem("jwt_token");
      return false;
    } else {
      console.log(`✅ User authenticated. User-Id: ${data.user_id}`);
      isAuthorized.set(true);
      authRoute.set('Sign-Out');
      userData.set(data);
      return true;
    }
  } catch (err) {
    console.error("Token check failed", err);
    isAuthorized.set(false);
    authRoute.set('Sign-In');
    userData.set(null);
    return false;
  }
}

// Login function - FIXED for your API response format
export async function login(credentials) {
  try {
    const response = await fetch(`${routesType.current_route}/auth/login`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(credentials),
      credentials: 'include'
    });

    const data = await response.json();

    // Handle different status codes
    if (response.status === 200 && data.access_token) {
      localStorage.setItem("jwt_token", data.access_token);
      await checkAuth(); // Update the global state
      return { 
        success: true, 
        data,
        status: response.status,
        message: data.message,
        description: data.description 
      };
    } else {
      // Return error details for UI handling
      return { 
        success: false, 
        status: response.status,
        message: data.message || 'Login failed',
        description: data.description || '',
        error: data.error 
      };
    }
    
  } catch (err) {
    return { 
      success: false, 
      status: 500,
      message: '❗ Login Failed',
      description: `${err.message}. Server unavailable. Buy me a coffee to help me get the best hosting.`,
      error: err.message 
    };
  }
}

// Logout function
export function logout() {
  localStorage.removeItem("jwt_token");
  isAuthorized.set(false);
  authRoute.set('Sign-In');
  userData.set(null);
  console.log("✅ User logged out");
}
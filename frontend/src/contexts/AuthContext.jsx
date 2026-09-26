import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/auth/auth.service.js';

/**
 * Authentication Context providing user state and auth methods.
 */
const AuthContext = createContext(undefined);

/**
 * AuthProvider is a component that wraps the parts of your application that need authentication information.
 * AuthProvider component that wraps the app to provide authentication context.
 * children means everything inside <AuthProvider>.
 */
export function AuthProvider({ children }) {
  // Authentication state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //   user = null
  // That means React initially doesn't know about a logged-in user.

  // application needs to check whether the user already has a valid/stored session.
  // Initialize user state from localStorage on mount
  useEffect(() => {
    //on initial mount, restore the session if a token and user are restored.
    //this keeps the user logged in across page refreshes w/out re-login
    const token = authService.getStoredToken();
    const storedUser = authService.getStoredUser();

    if (token && storedUser) {
      setUser(storedUser);
    }

    setLoading(false);
  }, []);

  /**
   * Registers a new user. Does not automatically log them in.
   * the user must log in after registration succeeds.
   * @param {Object} userData - { firstName, lastName, email, password }
   */
  const register = async (userData) => {
    // TODO: Call the auth service registration method and manage loading state.
    setLoading(true);
    try {
      const { user } = await authService.register(userData);
      return { success: true, user };
    } catch (error) {
      // Re-throw so the calling component can show the error message
      throw error;
    } finally {
      setLoading(false);
    }
  };
    
};

  /**
   * Authenticates a user and updates the session state if successful..
   * @param {Object} credentials - { email, password }
   */
  const login = async (credentials) => {
// Task: AuthContext + ProtectedRoute
    // TODO: Call the auth service login method and update the authenticated user state.
    // Write the task implementation here.
};

  /**
   * Clears the user session and redirects to the login page.
   * handles removing/clearing the stored authentication session
   */
  const logout = () => {
    // Task: AuthContext + ProtectedRoute
    // TODO: Clear the auth session, update user state, and navigate to /auth.
  };

  // Context value with state and methods
  const value = {
    user,
    loading,
    register,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  // put information into AuthContext.Provider so that it can be accessed by any component that consumes this context.
//   {
//     user,
//     loading,
//     register,
//     login,
//     logout,
//     isAuthenticated: !!user
// }


/**
 * Custom hook to access the authentication context.
 * @throws {Error} If used outside of AuthProvider
 */
export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

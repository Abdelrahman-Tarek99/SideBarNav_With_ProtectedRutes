import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
    // This function could check for authentication status
    // For example, check if a user token exists in localStorage
    const token = localStorage.getItem("userToken");
    return token !== null;  // Returns true if token exists, meaning user is logged in
};

export const ProtectedRoute = () => {
    const isAuthenticated = useAuth();  // Check auth status

    if (!isAuthenticated) {
        // User is not authenticated, redirect them to the login page
        return <Navigate to="/login" />;
    }

    // User is authenticated, allow access to the route
    return <Outlet />;
};


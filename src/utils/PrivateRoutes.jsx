import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

export const PrivateRoutesConfig = () => {
    const {user} = useAuth;
    return user ? <Outlet /> : <Navigate to="/login" />
}
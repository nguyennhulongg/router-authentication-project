import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

export const PublicRoutes = [
  { path: "/login", element: Login },
  { path: "/register", element: Register },
];

export const PrivateRoutes = [
  { path: "/", element: Home },
  { path: "/profile", element: Profile },
];

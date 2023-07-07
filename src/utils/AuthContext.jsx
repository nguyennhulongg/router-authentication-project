import React, { createContext, useContext, useEffect, useState } from "react";
import { account } from "../appwriteConfig";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setLoading(false);
  }, []);

  const loginUser = async (userInfo) => {
    setLoading(true)
    try {
        const res = await account.createEmailSession(
            userInfo.email,
            userInfo.password
        )
        console.log(res);
    } catch (error) {
        console.log(error);
    }
    setLoading(false)
  };

  const logoutUser = () => {};

  const registerUser = (userInfo) => {};

  const checkUserStatus = () => {};

  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
    checkUserStatus,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;

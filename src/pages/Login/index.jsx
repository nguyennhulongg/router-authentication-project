import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../../utils/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { user, loginUser } = useAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const loginForm = useRef(null);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser({ email, password });
  };

  return (
    <div>
      {user ? (
        <form ref={loginForm} action="" onSubmit={handleLogin}>
          <label htmlFor="emailInput">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="emailInput"
          />
          <label htmlFor="passwordInput">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="passwordInput"
          />
          <button>login</button>
        </form>
      ) : (
        <button>logout</button>
      )}
    </div>
  );
};

export default Login;

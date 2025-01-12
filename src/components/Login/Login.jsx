import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer.jsx";
import LoginAnimation from "./LoginAnimation/LoginAnimation.jsx";
import styles from "./Login.module.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("usersList")) || [];
    const user = storedUsers.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );

    if (user) {
      localStorage.setItem("userId", user.id);
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <>
      <Navbar isLoggedIn={false} pageName={"login"} />
      <div className={styles.login}>
        <div className={styles.loginMedia}>
          <LoginAnimation />
        </div>
        <div className={styles.loginContent}>
          <h1>Login</h1>
          <div className={styles.loginBox}>
            <form onSubmit={handleSubmit} className={styles.loginForm}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={credentials.username}
                onChange={handleChange}
                required
                className={styles.loginInput}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
                required
                className={styles.loginInput}
              />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Login;


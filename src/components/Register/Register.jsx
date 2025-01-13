import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import RegisterAnimation from "./RegisterAnimation/RegisterAnimation.jsx";
import styles from "./Register.module.css";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("usersList")) || [];
    if (
      storedUsers.some(
        (user) =>
          user.username === formData.username || user.email === formData.email
      )
    ) {
      alert("Username or email already exists!");
      return;
    }

    if (formData.password.length < 8) {
      alert("Password's length should be greater than 7");
      return;
    }

    const newUser = { ...formData, id: storedUsers.length + 1 };
    const updatedUsers = [...storedUsers, newUser];
    localStorage.setItem("usersList", JSON.stringify(updatedUsers));
    alert("Registration successful! Please log in.");
    navigate("/login");
  };

  return (
    <>
      <Navbar isLoggedIn={false} pageName={"register"} />
      <div className={styles.register}>
        <div className={styles.regMedia}>
          <RegisterAnimation />
        </div>
        <div className={styles.regContent}>
          <h1>Register</h1>
          <div className={styles.reginBox}>
            <form onSubmit={handleSubmit} className={styles.regForm}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className={styles.regInput}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={styles.regInput}
                required
              />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className={styles.regInput}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={styles.regInput}
                required
              />
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Register;

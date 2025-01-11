import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import HeroSection from "../HeroSection/HeroSection.jsx";

const LandingPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("false");

  useEffect(() => {
    function getDataFromLocalStorage() {
      const userData = localStorage.getItem("username");
      if (userData === "" || userData === null) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
    }
    getDataFromLocalStorage();
  }, []);

  return (
    <>
      <Navbar isLoggedIn={true} pageName={"landing"} />
      <HeroSection/>
    </>
  );
};

export default LandingPage;

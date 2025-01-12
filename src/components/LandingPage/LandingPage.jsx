import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import hackathons from "../../db/hackathonList.json";
import users from "../../db/users.json";
import HeroSection from "../HeroSection/HeroSection.jsx";
import LandingPageCards from "../LandingPageCards/LandingPageCards.jsx";

const LandingPage = () => {
  const [ogHackathonsList, setOgHackathonsList] = useState(hackathons);
  const [filterHackathonsList, setFilterHackathonsList] =
    useState(ogHackathonsList);
  const [ogUserList, setOgUserList] = useState(users);

  useEffect(() => {
    localStorage.setItem(
      "hackathonsList",
      JSON.stringify([...ogHackathonsList])
    );
  }, [ogHackathonsList]);
  useEffect(() => {
    localStorage.setItem("usersList", JSON.stringify([...ogUserList]));
  }, [ogUserList]);
  useEffect(() => {}, [filterHackathonsList]);

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
      <Navbar isLoggedIn={isLoggedIn} pageName={"landing"} />
      <HeroSection />
      <LandingPageCards
        ogHackathonsList={ogHackathonsList}
        filterHackathonsList={filterHackathonsList}
        setFilterHackathonsList={setFilterHackathonsList}
      />
    </>
  );
};

export default LandingPage;

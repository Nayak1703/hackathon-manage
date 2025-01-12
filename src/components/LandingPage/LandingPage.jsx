import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import hackathons from "../../db/hackathonList.json";
import users from "../../db/users.json";
import HeroSection from "../HeroSection/HeroSection.jsx";
import LandingPageCards from "../LandingPageCards/LandingPageCards.jsx";
import Footer from "../Footer/Footer.jsx";
import { ScrollProvider } from "../Scroll/ScrollContext.jsx";

const LandingPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("false");
  const [ogHackathonsList, setOgHackathonsList] = useState(hackathons);
  const [filterHackathonsList, setFilterHackathonsList] = useState([]);
  const [referenceFilterList, setReferenceFilterList] = useState([])
  const [ogUserList, setOgUserList] = useState(users);
  const [selectedTab, setSelectedTab] = useState(1);

  useEffect(() => {
    localStorage.setItem(
      "hackathonsList",
      JSON.stringify([...ogHackathonsList])
    );
  }, [ogHackathonsList]);

  useEffect(() => {
    localStorage.setItem("usersList", JSON.stringify([...ogUserList]));
  }, [ogUserList]);

  useEffect(() => {
    let tabFilter;
    if(selectedTab === 0) {
      tabFilter = ogHackathonsList.filter((ele)=> ele.status==="past")
    } else if(selectedTab === 1) {
      tabFilter = ogHackathonsList.filter((ele)=> ele.status==="upcoming")
    } else if(selectedTab === 2) {
      tabFilter = ogHackathonsList.filter((ele)=> ele.status==="current")
    }
    setFilterHackathonsList(tabFilter)
    setReferenceFilterList(tabFilter)
  }, [selectedTab]);

  useEffect(() => {
    function getDataFromLocalStorage() {
      const userId = localStorage.getItem("userId");
      if (userId === "" || userId === null) {
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
      <ScrollProvider>
      <HeroSection />
      <LandingPageCards
        ogHackathonsList={ogHackathonsList}
        filterHackathonsList={filterHackathonsList}
        setFilterHackathonsList={setFilterHackathonsList}
        selectedTab={selectedTab}
        referenceFilterList={referenceFilterList}
        setSelectedTab={setSelectedTab}
      />
      </ScrollProvider>

      <Footer/>
    </>
  );
};

export default LandingPage;

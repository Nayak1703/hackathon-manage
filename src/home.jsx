import React from "react";
import LandingPage from "../src/components/LandingPage/LandingPage.jsx";
import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      {/* <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/createHackathon" element={<CreateHackathon />} />
      <Route exact path="/user" element={<NotFound />} />
      <Route exact path="/user/:userName" element={<UserProfile />} />
      <Route exact path="/hackathone" element={<NotFound />} />
      <Route exact path="/hackathone/:id" element={<HackathoneDetails />} />
      <Route exact path="/not-found" element={<NotFound />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default Home;
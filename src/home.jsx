import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../src/components/LandingPage/LandingPage.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import CreateHackathon from "./components/CreateHackathon/CreateHackathon.jsx";


const Home = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/createHackathon" element={<CreateHackathon />}/>
      {/*
      <Route exact path="/user" element={<NotFound />} />
      <Route exact path="/user/:userId" element={<UserProfile />} />
      <Route exact path="/hackathone" element={<NotFound />} />
      <Route exact path="/hackathone/:id" element={<HackathoneDetails />} />
      <Route exact path="/not-found" element={<NotFound />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default Home;
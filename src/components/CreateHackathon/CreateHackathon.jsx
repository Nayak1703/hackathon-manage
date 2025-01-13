import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./CreateHackathon.module.css";
// import "./styles.css";

const CreateHackathon = ({setOgHackathonsList}) => {
  const navigate = useNavigate();

  // Get existing hackathons from localStorage
  const storedHackathons =
    JSON.parse(localStorage.getItem("hackathonsList")) || [];
  const nextId = storedHackathons.length
    ? storedHackathons[storedHackathons.length - 1].id + 1
    : 1;

  const [hackathonData, setHackathonData] = useState({
    id: nextId,
    title: "",
    img: "",
    short_description: "",
    start_date: "",
    end_date: "",
    fee: 0,
    mode: "",
    location: "",
    team_size: "",
    participate_teams: 0,
    registration_last_date: "",
    winner: "",
    organized_By: "",
    register_users: [],
    about: "",
    jury: [
      {
        img: "https://via.placeholder.com/150",
        fullName: "Jaga Das",
      },
      {
        img: "https://via.placeholder.com/150",
        fullName: "Kuldeep Tiwari",
      },
      {
        img: "https://via.placeholder.com/150",
        fullName: "Sonu Nayak",
      },
      {
        img: "https://via.placeholder.com/150",
        fullName: "Rupesh Jha",
      },
    ],
    price: {
      first: "",
      second: "",
      third: "",
    },
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (
      name === "price.first" ||
      name === "price.second" ||
      name === "price.third"
    ) {
      setHackathonData((prev) => ({
        ...prev,
        price: { ...prev.price, [name.split(".")[1]]: parseInt(value) || 0 },
      }));
    } else {
      setHackathonData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let modifiedHackathonData = { ...hackathonData };

    if (
      modifiedHackathonData.status === "current" ||
      modifiedHackathonData.status === "past"
    ) {
      delete modifiedHackathonData.registration_last_date;
    } else if (modifiedHackathonData.status === "upcoming") {
      delete modifiedHackathonData.winner;
    }

    const randomUsers = ["yash1008", "rama1008", "test1008", "sriRam1008"];
    const shuffledUsers = randomUsers.sort(() => 0.5 - Math.random());
    const selectedUsers = shuffledUsers.slice(
      0,
      Math.floor(Math.random() * randomUsers.length) + 1
    );
    modifiedHackathonData.register_users = selectedUsers;

    const updatedHackathons = [...storedHackathons, modifiedHackathonData];
    localStorage.setItem("hackathonsList", JSON.stringify(updatedHackathons));


    console.log("Hackathon Data:", modifiedHackathonData);
console.log("Updated Hackathons List:", updatedHackathons);
console.log("Stored Hackathons in LocalStorage:", localStorage.getItem("hackathonsList"));

setOgHackathonsList(localStorage.getItem("hackathonsList"));
    setTimeout(() => navigate("/"), 100)
  };

  return (
    <>
      <Navbar isLoggedIn={true} pageName={"createHackathon"} />
      <div className={styles.createHackathon}>
        <h1>Create Hackathone</h1>
        <p>
          Create and manage your hackathon effortlessly on Hackathrone! Bring
          innovators together, challenge creativity, and spark groundbreaking
          ideas. With easy event setup, participant engagement tools, and
          customizable options, Hackathrone is the perfect platform to host your
          next tech competition. Let’s build something amazing!
        </p>

        <div className={styles.formContainer}>
          <h2>Add New Hackathon</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={hackathonData.title}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Image URL:
              <input
                type="url"
                name="img"
                value={hackathonData.img}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Short Description:
              <textarea
                name="short_description"
                value={hackathonData["short_description"]}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Start Date:
              <input
                type="date"
                name="start_date"
                value={hackathonData["start_date"]}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              End Date:
              <input
                type="date"
                name="end_date"
                value={hackathonData["end_date"]}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Entry Fee:
              <input
                type="number"
                name="fee"
                value={hackathonData.fee}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Mode:
              <select
                name="mode"
                value={hackathonData.mode}
                onChange={handleChange}
                required
              >
                <option value="Online">Online</option>
                <option value="Hybride">Hybride</option>
                <option value="Offline">Offline</option>
              </select>
            </label>
            <label>
              Location:
              <select
                name="location"
                value={hackathonData.location}
                onChange={handleChange}
                required
              >
                <option value="Mumbai">Mumbai</option>
                <option value="Noida">Noida</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Bhubaneswar">Bangalore</option>
                <option value="Chennai">Chennai</option>
              </select>
            </label>
            <label>
              Team Size:
              <input
                type="number"
                name="team_size"
                value={hackathonData["team_size"]}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              participate Teams:
              <input
                type="number"
                name="participate_teams"
                value={hackathonData["participate_teams"]}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Winner:
              <input
                type="text"
                name="winner"
                value={hackathonData["winner"]}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Organized By:
              <input
                type="text"
                name="organized_By"
                value={hackathonData["organized_By"]}
                onChange={handleChange}
                required
              />
            </label>
            <label>
            <select
                name="status"
                value={hackathonData.status}
                onChange={handleChange}
                required
              >
                <option value="current">Current</option>
                <option value="upcoming">Upcoming</option>
                <option value="past">Past</option>
              </select>
            </label>
            
            <label>
              Registration Last Date:
              <input
                type="date"
                name="registration_last_date"
                value={hackathonData["registration_last_date"]}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              About Hackathon:
              <textarea
                name="about"
                value={hackathonData.about}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              First Prize:
              <input
                type="number"
                name="price.first"
                value={hackathonData.price.first}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Second Prize:
              <input
                type="number"
                name="price.second"
                value={hackathonData.price.second}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Third Prize:
              <input
                type="number"
                name="price.third"
                value={hackathonData.price.third}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit">Submit Hackathon</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateHackathon;

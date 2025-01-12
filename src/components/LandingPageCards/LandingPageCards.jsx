import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TabComponent from "../Tabs/TabComponent.jsx";
import SearchComponent from "../SearchComponent/SearchComponent.jsx";
import DropDown from "../DropDownComponent/DropDown.jsx";
import styles from "./LandingPageCards.module.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const LandingPageCards = ({
  ogHackathonsList,
  filterHackathonsList,
  setFilterHackathonsList,
}) => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [title, setTitle] = useState("");

  const [mode, setMode] = useState("");
  const [location, setLocation] = useState("");
  const [fee, setFee] = useState("");
  const [prize, setPrize] = useState("");
  const [sortBy, setSortBy] = useState("");

  const [tabsFilterArr, setTabsFilterArr] = useState([]);

  useEffect(() => {
    if (title || mode || location || fee || prize || sortBy) {
      clearFilterbtn();
    }
    if (title) {
      let filterArr = ogHackathonsList.filter((ele) =>
        ele.title.toLowerCase().includes(title)
      );
      setFilterHackathonsList(filterArr);
    } else {
      setFilterHackathonsList(ogHackathonsList);
    }
  }, [title]);

  function clearFilterbtn() {
    setMode("");
    setLocation("");
    setFee("");
    setPrize("");
    setSortBy("");
  }

  useEffect(() => {
    if (mode) {
      let filterArr;
      if (location || fee || prize || sortBy) {
        filterArr = tabsFilterArr.filter(
          (ele) => ele.mode.toLowerCase() === mode.toLowerCase()
        );
      } else {
        filterArr = filterHackathonsList.filter(
          (ele) => ele.mode.toLowerCase() === mode.toLowerCase()
        );
      }
      setTabsFilterArr(filterArr);
    }
    if (location) {
      let filterArr;
      if (mode || fee || prize || sortBy) {
        filterArr = tabsFilterArr.filter(
          (ele) => ele.location.toLowerCase() === location.toLowerCase()
        );
      } else {
        filterArr = filterHackathonsList.filter(
          (ele) => ele.location.toLowerCase() === location.toLowerCase()
        );
      }
      setTabsFilterArr(filterArr);
    }
    if (fee) {
      let filterArr;

      if (mode || location || prize || sortBy) {
        if (fee === "Free") {
          filterArr = tabsFilterArr.filter((ele) => ele.fee === fee);
        } else if (fee === "LowToHigh") {
          let feeHaveNum = tabsFilterArr.filter(
            (ele) => typeof ele.fee !== "string"
          );
          filterArr = feeHaveNum.sort((a, b) => a.fee - b.fee);
        } else if (fee === "HighToLow") {
          let feeHaveNum = tabsFilterArr.filter(
            (ele) => typeof ele.fee !== "string"
          );
          filterArr = feeHaveNum.sort((a, b) => b.fee - a.fee);
        }
      } else {
        if (fee === "Free") {
          filterArr = filterHackathonsList.filter((ele) => ele.fee === fee);
        } else if (fee === "LowToHigh") {
          let feeHaveNum = filterHackathonsList.filter(
            (ele) => typeof ele.fee !== "string"
          );
          filterArr = feeHaveNum.sort((a, b) => a.fee - b.fee);
        } else if (fee === "HighToLow") {
          let feeHaveNum = filterHackathonsList.filter(
            (ele) => typeof ele.fee !== "string"
          );
          filterArr = feeHaveNum.sort((a, b) => b.fee - a.fee);
        }
      }
      setTabsFilterArr(filterArr);
    }

    if (prize) {
      let filterArr;
      if (mode || location || fee || sortBy) {
        if (prize === "LowToHigh") {
          let feeHaveNum = tabsFilterArr.filter(
            (ele) => typeof ele.fee !== "string"
          );
          filterArr = feeHaveNum.sort((a, b) => a.price.first - b.price.first);
        } else if (prize === "HighToLow") {
          let feeHaveNum = tabsFilterArr.filter(
            (ele) => typeof ele.fee !== "string"
          );
          filterArr = feeHaveNum.sort((a, b) => b.price.first - a.price.first);
        }
      } else {
        if (prize === "LowToHigh") {
          let feeHaveNum = filterHackathonsList.filter(
            (ele) => typeof ele.fee !== "string"
          );
          filterArr = feeHaveNum.sort((a, b) => a.price.first - b.price.first);
        } else if (prize === "HighToLow") {
          let feeHaveNum = filterHackathonsList.filter(
            (ele) => typeof ele.fee !== "string"
          );
          filterArr = feeHaveNum.sort((a, b) => b.price.first - a.price.first);
        }
      }
      setTabsFilterArr(filterArr);
    }

    if (sortBy) {
      let filterArr;
      if (mode || location || fee || prize) {
        if (sortBy.toLowerCase() === "date") {
          console.log("yash")
          filterArr = tabsFilterArr.sort(
            (a, b) =>
              new Date(a.registration_last_date) -
              new Date(b.registration_last_date)
          );
        } else if (sortBy.toLowerCase() === "popularity") {
          filterArr = tabsFilterArr.sort((a,b) => b.participate_teams - a.participate_teams);
        }
      } else {
        if (sortBy.toLowerCase() === "date") {
          console.log("nayak")
          filterArr = filterHackathonsList.sort(
            (a, b) =>
              new Date(a.registration_last_date) -
              new Date(b.registration_last_date)
          );
        } else if (sortBy.toLowerCase() === "popularity") {
          filterArr = filterHackathonsList.sort((a,b) => b.participate_teams - a.participate_teams);
        }
      }
      setTabsFilterArr(filterArr);
    }
  }, [mode, location, fee, prize, sortBy]);

  useEffect(() => {
    console.log(filterHackathonsList);
    console.log(tabsFilterArr);
  }, [filterHackathonsList, tabsFilterArr]);

  return (
    <div className={styles.cards_section_parent}>
      <div className={styles.cards_section_head}>
        <h1 className={styles.cards_section_head_txt}>Hackathons</h1>
      </div>
      <div className={styles.cards_section_tabs_search}>
        <div className={styles.cards_section_tabs}>
          <TabComponent
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        </div>
        <div className={styles.cards_section_search}>
          <SearchComponent setTitle={setTitle} title={title} />
        </div>
      </div>
      <div className={styles.cards_section_filter_parent}>
        <div className={styles.cards_section_filter}>
          <DropDown
            name={"Mode"}
            state={mode}
            setState={setMode}
            dropDownList={["Online", "Hybride", "Offline"]}
          />
          <DropDown
            name={"Location"}
            state={location}
            setState={setLocation}
            dropDownList={[
              "Mumbai",
              "Noida",
              "Delhi",
              "Bangalore",
              "Bhubaneswar",
              "Chennai",
            ]}
          />
          <DropDown
            name={"Fee"}
            state={fee}
            setState={setFee}
            dropDownList={["Free", "Low To High", "High To Low"]}
          />
          <DropDown
            name={"Prize"}
            state={prize}
            setState={setPrize}
            dropDownList={["Low To High", "High To Low"]}
          />
          <DropDown
            name={"SortBy"}
            state={sortBy}
            setState={setSortBy}
            dropDownList={["Date", "Popularity"]}
          />
        </div>
        <div className={styles.cards_section_filter_clear}>
          <p>Clear all</p>
        </div>
      </div>
      <div className={styles.cards_section_filter_selected_parent}></div>
      <div className={styles.cards_section_cards}>
        <CustomTabPanel
          value={selectedTab}
          sx={{ textDecoration: "none" }}
          index={0}
        >
          Item One
        </CustomTabPanel>
        <CustomTabPanel
          value={selectedTab}
          sx={{ textDecoration: "none" }}
          index={1}
        >
          Item Two
        </CustomTabPanel>
        <CustomTabPanel
          value={selectedTab}
          sx={{ textDecoration: "none" }}
          index={2}
        >
          Item Three
        </CustomTabPanel>
      </div>
    </div>
  );
};

export default LandingPageCards;

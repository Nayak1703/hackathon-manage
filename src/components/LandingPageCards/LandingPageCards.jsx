import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TabComponent from "../Tabs/TabComponent.jsx";
import SearchComponent from "../SearchComponent/SearchComponent.jsx";
import DropDown from "../DropDownComponent/DropDown.jsx";
import Card from "../Card/Card.jsx"
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
  filterHackathonsList,
  setFilterHackathonsList,
  selectedTab,
  referenceFilterList,
  setSelectedTab,
}) => {
  const [title, setTitle] = useState("");
  const [mode, setMode] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [dropDownFilter, setDropDownFilter] = useState([]);

  function clearFilterbtn() {
    setMode("");
    setLocation("");
    setSortBy("");
    setTitle("");
  }

  useEffect(() => {
    console.log(filterHackathonsList);
  }, [filterHackathonsList]);

  useEffect(() => {
    clearFilterbtn();
  }, [selectedTab]);

  useEffect(() => {
    if (mode || location || sortBy || title === "" || title) {
      let filterArrList = [...referenceFilterList];

      if (title) {
        filterArrList = filterArrList.filter((ele) =>
          ele.title.toLowerCase().includes(title)
        );
      } else {
        filterArrList = [...referenceFilterList];
      }

      if (mode) {
        filterArrList = filterArrList.filter(
          (ele) => ele.mode.toLowerCase() === mode.toLowerCase()
        );
      }

      if (location) {
        filterArrList = filterArrList.filter(
          (ele) => ele.location.toLowerCase() === location.toLowerCase()
        );
      }

      if (sortBy) {
        if (sortBy === "Date") {
          filterArrList.sort(
            (a, b) =>
              new Date(a.registration_last_date) -
              new Date(b.registration_last_date)
          );
        } else if (sortBy === "Popularity") {
          filterArrList.sort(
            (a, b) => b.participate_teams - a.participate_teams
          );
        } else if (sortBy === "EntryFees") {
          filterArrList.sort((a, b) => a.fee - b.fee);
        } else if (sortBy === "PrizeMoney") {
          filterArrList.sort((a, b) => b.price.first - a.price.first);
        }
      }

      setFilterHackathonsList(filterArrList);
    }
  }, [mode, location, sortBy, title]);

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
            name={"SortBy"}
            state={sortBy}
            setState={setSortBy}
            dropDownList={["Date", "Popularity", "Entry Fees", "Prize Money"]}
          />
        </div>
        <div
          className={styles.cards_section_filter_clear}
          onClick={clearFilterbtn}
        >
          <p>Clear all</p>
        </div>
      </div>
      <div className={styles.cards_section_filter_selected_parent}></div>
      <div className={styles.cards_section_cards}>
        {selectedTab === 0 ? (
          <CustomTabPanel
            value={selectedTab}
            sx={{ textDecoration: "none" }}
            index={0}
          >
            Item One
          </CustomTabPanel>
        ) : selectedTab === 1 ? (
          <CustomTabPanel
            value={selectedTab}
            sx={{ textDecoration: "none" }}
            index={1}
          >
            Item Two
          </CustomTabPanel>
        ) : (
          <CustomTabPanel
            value={selectedTab}
            sx={{ textDecoration: "none" }}
            index={2}
          >
            Item Three
          </CustomTabPanel>
        )}
      </div>
    </div>
  );
};

export default LandingPageCards;

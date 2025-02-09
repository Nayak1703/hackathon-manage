import React, { useEffect, useState, useContext } from "react";
import TabComponent from "../Tabs/TabComponent.jsx";
import SearchComponent from "../SearchComponent/SearchComponent.jsx";
import DropDown from "../DropDownComponent/DropDown.jsx";
import Pagination from "@mui/material/Pagination";
import Card from "../Card/Card.jsx";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import styles from "./LandingPageCards.module.css";
import { ScrollContext } from "../Scroll/ScrollContext.jsx"

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
      {value === index && <div className={styles.cardsOuter}>{children}</div>}
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
  const theme = useTheme();

  const [title, setTitle] = useState("");
  const [mode, setMode] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [cardListByPage, setcardListByPage] = useState([]);
  const [selectedPage, setSelectedPage] = React.useState(1);

  const divRef = useContext(ScrollContext)

  function clearFilterbtn() {
    setMode("");
    setLocation("");
    setSortBy("");
    setTitle("");
  }

  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const handlePageChange = (event, value) => {
    setSelectedPage(value);
    getCardByPage(value, filterHackathonsList);
  };
  const getCardByPage = (pageNo, cardData) => {
    const getCardData = cardData;
    const CardDataByPage = getCardData.slice((pageNo - 1) * 6, 6 * pageNo);
    setcardListByPage(CardDataByPage);
  };


  useEffect(() => {
    getCardByPage(selectedPage, filterHackathonsList);
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
      <div className={styles.cards_section_pagination}>
        <Pagination
          count={Math.ceil(filterHackathonsList.length / 6)}
          page={selectedPage}
          onChange={handlePageChange}
          size={isXs ? "small" : ""}
          sx={{
            "& .MuiButtonBase-root, .MuiPaginationItem-ellipsis": {
              color: "#FFEDD8",
            },
            "& .Mui-selected": {
              backgroundColor: "#bb3d7e !important",
              color: "#FFEDD8",
            },
          }}
        />
      </div>
      <div className={styles.cards_section_cards} ref={divRef} >
        {selectedTab === 0 ? (
          <CustomTabPanel
            value={selectedTab}
            sx={{ textDecoration: "none" }}
            index={0}
          >
            {cardListByPage.map((ele) => (
              <Card
                id={ele.id}
                img={ele.img}
                loc={ele.location}
                title={ele.title}
                desc={ele.short_description}
                start={ele.start_date}
                end={ele.end_date}
                teams={ele.participate_teams}
                size={ele.team_size}
                prize={ele.price.first}
                mode={ele.mode}
                fee={ele.fee}
                org={ele.organized_By}
                win_lDate={ele.winner ? ele.winner : ele.registration_last_date}
                status={ele.status}
              />
            ))}
          </CustomTabPanel>
        ) : selectedTab === 1 ? (
          <CustomTabPanel
            value={selectedTab}
            sx={{ textDecoration: "none" }}
            index={1}
          >
            {cardListByPage.map((ele) => (
              <Card
                id={ele.id}
                img={ele.img}
                loc={ele.location}
                title={ele.title}
                desc={ele.short_description}
                start={ele.start_date}
                end={ele.end_date}
                teams={ele.participate_teams}
                size={ele.team_size}
                prize={ele.price.first}
                mode={ele.mode}
                fee={ele.fee}
                org={ele.organized_By}
                win_lDate={ele.winner ? ele.winner : ele.registration_last_date}
                status={ele.status}
              />
            ))}
          </CustomTabPanel>
        ) : (
          <CustomTabPanel
            value={selectedTab}
            sx={{ textDecoration: "none" }}
            index={2}
          >
            {cardListByPage.map((ele) => (
              <Card
                id={ele.id}
                img={ele.img}
                loc={ele.location}
                title={ele.title}
                desc={ele.short_description}
                start={ele.start_date}
                end={ele.end_date}
                teams={ele.participate_teams}
                size={ele.team_size}
                prize={ele.price.first}
                mode={ele.mode}
                fee={ele.fee}
                org={ele.organized_By}
                win_lDate={ele.winner ? ele.winner : ele.registration_last_date}
                status={ele.status}
              />
            ))}
          </CustomTabPanel>
        )}
      </div>
    </div>
  );
};

export default LandingPageCards;

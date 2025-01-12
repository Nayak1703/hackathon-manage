import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styles from "./TabComponent.module.css";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabComponent = ({ selectedTab, setSelectedTab }) => {
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ width: "100%", textDecoration: "none" }}>
      <Box>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          variant="scrollable"
          sx={{
            ".MuiButtonBase-root": {
              color: "#FFEDD8 !important",
            },
            ".MuiTabs-flexContainer": {
              justifyContent: "space-between"
            },
            ".Mui-selected": {
              color: `#EABE6C !important `,
            },
          }}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#EABE6C",
              height: "2px",
            },
          }}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{ textTransform: "none" }}
            className={styles.customTabs}
            label="Past"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ textTransform: "none" }}
            className={styles.customTabs}
            label="Upcoming"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ textTransform: "none" }}
            className={styles.customTabs}
            label="Current"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
    </Box>
  );
};

export default TabComponent;

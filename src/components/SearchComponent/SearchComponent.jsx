import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Search.module.css";

const SearchComponent = ({ setTitle, title }) => {
  return (
    <TextField
      id="outlined-controlled"
      placeholder="Search by hackathon's name"
      sx={{
        "& .MuiInputBase-input": {
            padding: "10px"
        },
        "& .MuiOutlinedInput-root": {
        //   padding: "2px 5px !important",
          width: "100%",
          backgroundColor: "#ffffff",
          fontFamily: "Poppins, sans-serif",
          color: "#121212",

          "& fieldset": {
            borderColor: "#ffffff",
          },
          "&:hover fieldset": {
            border:"none"
          },
          "&.Mui-focused fieldset": {
            border:"none"
          },
        },
      }}
      slotProps={{
        input: {
          type: "search",
          endAdornment: (
            <InputAdornment position="end">
              <button className={styles.searchButton} type="submit">
                <SearchIcon />
              </button>
            </InputAdornment>
          ),
        },
      }}
      value={title}
      onInput={(e) => {
        setTitle(e.target.value);
      }}
      className={styles.searchField}
    />
  );
};

export default SearchComponent;

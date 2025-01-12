import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const DropDown = ({ name, state, setState, dropDownList }) => {
  const handleChange = (e) => {
    setState(e.target.value);
  };
  return (
    <Box sx={{ minWidth: name === "Location" ? 120 : 100 }}>
      <FormControl fullWidth size="small">
        <InputLabel
          sx={{color: "#FFEDD8 !important", letterSpacing: "1px" }}
          id="demo-simple-select-label"
        >
          {name}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          label={name}
          autoWidth
          onChange={handleChange}
          sx={{
            color: "#FFEDD8 !important",
            "&.MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#891652",
              },
              "&:hover fieldset": {
                borderColor: "#bb3d7e",
              },
              "&.Mui-focused fieldset": {
                color: "red !important",
                borderColor: "#FFEDD8",
              },
              "& .MuiSvgIcon-root": { color: "#891652 !important" },
            },
          }}
        >
          {dropDownList.map((ele, index) => (
            <MenuItem value={ele.split(" ").join("")} key={index}>
              {ele}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropDown;

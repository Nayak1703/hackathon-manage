import React from "react";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "./Navbar.module.css";

const Navbar = ({ isLoggedIn, pageName }) => {
  console.log(isLoggedIn, pageName);
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const buttonProps = {
    size: isSmallScreen ? "small" : "large",
  };

  return (
    <>
      <div className={styles.navbarParent}>
        <div className={styles.navbarBrand}>
          <h3 className={styles.navbarBrandNamae}>
            Hacka<span className={styles.navbarSubBrandNamae}>Throne</span>
          </h3>
        </div>

        <div className={styles.navbarBtns}>
          {pageName === "landing" && !isLoggedIn ? (
            <>
              <Button
                variant="contained"
                sx={{ textTransform: "none", backgroundColor: "#891652", color: "#FFEDD8" }}
                {...buttonProps}
                className={styles.loginBtn}
              >
                Login
              </Button>
              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  borderColor: "#891652",
                  color: "#FFEDD8",
                }}
                {...buttonProps}
                className={styles.regBtn}
              >
                Register
              </Button>
            </>
          ) : pageName === "landing" && isLoggedIn ? (
            <>
              <Button
                variant="contained"
                sx={{ textTransform: "none", backgroundColor: "#891652", color: "#FFEDD8" }}
                {...buttonProps}
                className={styles.profileBtn}
              >
                My Profile
              </Button>
              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  borderColor: "#D84040",
                  color: "#D84040",
                }}
                {...buttonProps}
                className={styles.logoutBtn}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button
              variant="outlined"
              {...buttonProps}
              sx={{
                textTransform: "none",
                borderColor: "#891652",
                color: "#FFEDD8",
              }}
              className={styles.exploreBtn}
              startIcon={<ArrowBackIcon />}
            >
              Back to explore
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

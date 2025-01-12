import React,{useContext} from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import styles from "./HeroSection.module.css";
import Animation from "./animation/Animation.jsx"
import { ScrollContext } from "../Scroll/ScrollContext.jsx";

const HeroSection = () => {

  const divRef = useContext(ScrollContext);

  const scrollToDiv = () => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.heroSection_parent}>
      <div className={styles.heroSection_content}>
        <div className={styles.heroSection_info}>
          <div className={styles.heroSection_info_heading}>
            <h1 className={styles.heroSection_info_heading_text}>
              Hacka
              <span className={styles.heroSection_info_Subhead_text}>
                Throne 👑
              </span>
            </h1>
          </div>
          <div className={styles.heroSection_info_desc}>
            <p className={styles.heroSection_info_desc_text}>
              Welcome to Hackathrone👑, where every code is a step closer to the
              throne! Show you're the king of innovation and claim your crown in
              this challenge-based hackathon of champions.
            </p>
          </div>
        </div>
        <div className={styles.heroSection_btns}>
          <Button
            variant="contained"
            size="large"
            sx={{
              textTransform: "none",
              backgroundColor: "#891652",
              color: "#FFEDD8",
            }}
            className={styles.heroSection_exp_btn}
            onClick={scrollToDiv}
          >
            Explore Hackathon
          </Button>

          <Button
            variant="contained"
            size="large"
            sx={{
              textTransform: "none",
              backgroundColor: "#891652",
              color: "#FFEDD8",
            }}
            className={styles.heroSection_exp_btn}
            endIcon={<AddIcon />}
          >
            Organize Hackathon
          </Button>
        </div>
      </div>
      <div className={styles.heroSection_media}>
        <Animation/>
      </div>
    </div>
  );
};

export default HeroSection;

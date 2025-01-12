import React from "react";
import styles from "./Card.module.css";

const Card = ({
  img,
  loc,
  title,
  desc,
  start,
  end,
  teams,
  size,
  prize,
  mode,
  fee,
  org,
  win_lDate,
}) => {
  function convertDate(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  function indianRupee(amount) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(amount);
  }

  function isValidDate(dateStr) {
    const date = new Date(dateStr);
    return !isNaN(date.getTime());
  }

  return (
    <div className={styles.card_parent}>
      <div className={styles.card_media}>
        <img className={styles.card_img} src={img} alt="hackathon-img" />
        <div className={styles.card_chip}>
          <p>{mode}</p>
        </div>
      </div>
      <div className={styles.card_info}>
        <div className={styles.card_head}>
          <h1>{title}</h1>
        </div>
        <div className={styles.card_desc}>
          <p>{desc}</p>
        </div>

        <div className={styles.card_duration}>
          <div className={styles.card_event_start}>
            <p>
              Start: <span>{convertDate(start)}</span>
            </p>
          </div>
          <div className={styles.card_event_end}>
            <p>
              End: <span>{convertDate(end)}</span>
            </p>
          </div>
        </div>
        <div className={styles.card_team}>
          <div className={styles.card_team_participate}>
            <p>
              Participate Teams: <span>{teams}</span>
            </p>
          </div>
          <div className={styles.card_event_price}>
            <p>
              Price: <span>{indianRupee(prize)}</span>
            </p>
          </div>
        </div>
        <div className={styles.card_fmt}>
          <div className={styles.card_event_loc}>
            <p>
              loc: <span>{loc}</span>
            </p>
          </div>
          <div className={styles.card_event_fee}>
            <p>
              Fee: <span>{indianRupee(fee)}</span>
            </p>
          </div>

          <div className={styles.card_team_size}>
            <p>
              Team Size: <span>{size}</span>
            </p>
          </div>
        </div>

        <div className={styles.card_extraInfo}>
          {isValidDate(win_lDate) ? (
            <p>
              Registration Last Date: <span>{convertDate(win_lDate)}</span>
            </p>
          ) : (
            <p>
              Winner: <span>{win_lDate}</span>
            </p>
          )}
        </div>
        <div className={styles.card_org}>
          <p>
            Organized By: <span>{org}</span>
          </p>
        </div>
        <div className={styles.card_btn}>
          <p>Register Now</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import { Link } from "react-router-dom";
import HeaderLabel from "../../components/HeaderLabel/HeaderLabel";
import styles from "./Settings.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faArrowAltCircleLeft} />;

const Settings = ({ handleRadio, celsius }) => {
  return (
    <>
      <HeaderLabel />
      <div className={styles.wrapper}>
        <h1>Ustawienia</h1>
        <div className={styles.form}>
          <div className={styles.labelUnit}>Jednostka:</div>
          <form className={styles.unitsRadio}>
            <div>
              <input
                id="celsius"
                type="radio"
                checked={celsius === true}
                onChange={() => handleRadio(true)}
              />
              <label htmlFor="celsius">&#8451;</label>
            </div>
            <div>
              <input
                id="fahrenheit"
                type="radio"
                checked={celsius === false}
                onChange={() => handleRadio(false)}
              />
              <label htmlFor="fahrenheit">&#8457;</label>
            </div>
          </form>
        </div>
        <Link to="/">
          <button className={styles.button}> {element} Powrót </button>
        </Link>
      </div>
    </>
  );
};

export default Settings;

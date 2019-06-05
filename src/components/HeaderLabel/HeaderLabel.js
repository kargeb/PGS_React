import React from "react";
import { Link } from "react-router-dom";
import styles from "./HeaderLabel.module.css";
import ButtonSettings from "../ButtonSettinngs/ButtonSettings";

const HeaderLabel = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="/settings">
        <ButtonSettings>Ustawienia</ButtonSettings>
      </Link>
    </div>
  );
};

export default HeaderLabel;

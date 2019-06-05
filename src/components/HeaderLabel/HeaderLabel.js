import React from "react";
import { Link } from "react-router-dom";
import styles from "./HeaderLabel.module.css";
import ButtonSettings from "../ButtonSettinngs/ButtonSettings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const HeaderLabel = () => {
  const element = <FontAwesomeIcon icon={faCog} />;

  return (
    <div className={styles.wrapper}>
      <Link to="/settings">
        <ButtonSettings>{element} Ustawienia</ButtonSettings>
      </Link>
    </div>
  );
};

export default HeaderLabel;

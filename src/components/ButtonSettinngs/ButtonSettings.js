import React from "react";
import styles from "./ButtonSettings.module.css";

const ButtonSettings = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default ButtonSettings;

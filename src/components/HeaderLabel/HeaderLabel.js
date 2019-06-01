import React from "react";
import styles from "./HeaderLabel.module.css";

const HeaderLabel = ({ click }) => {
  return <div className={styles.wrapper} onClick={click} />;
};

export default HeaderLabel;

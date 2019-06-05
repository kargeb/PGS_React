import React from "react";
import styles from "./Button.module.css";

const Button = ({ city, children, removeCity }) => {
  return (
    <button className={styles.button} onClick={removeCity} name={city}>
      {children}
    </button>
  );
};

export default Button;

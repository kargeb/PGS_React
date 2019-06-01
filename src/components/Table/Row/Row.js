import React from "react";
import styles from "./Row.module.css";

const Row = ({ city, click }) => {
  console.log(city);

  return (
    <tr className={styles.row} onClick={click}>
      <td className={styles.cell}>{city.id}</td>
      <td className={styles.cell}>{city.name}</td>
      <td className={styles.cell}>{city.temp}</td>
    </tr>
  );
};

export default Row;

import React from "react";
import styles from "./Row.module.css";
import Button from "../../Button/Button";

const Row = ({ city, click }) => {
  console.log(city);

  return (
    <tr className={styles.row} onClick={click}>
      <td className={styles.cell}>{city}</td>
      <Button city={city} />
      {/* <td className={styles.cell}>{city.name}</td>
      <td className={styles.cell}>{city.temp}</td> */}
    </tr>
  );
};

export default Row;

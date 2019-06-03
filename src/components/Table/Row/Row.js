import React from "react";
import styles from "./Row.module.css";
import Button from "../../Button/Button";

const Row = ({ city, click }) => {
  console.log(city);

  return (
    <tr className={styles.row} onClick={click}>
      <td className={styles.cell}>{city}</td>

      <Button city={city} />
    </tr>
  );
};

export default Row;

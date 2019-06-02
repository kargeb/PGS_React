import React from "react";
import styles from "./Table.module.css";
import Row from "./Row/Row";

const Table = ({ cities, click }) => {
  return (
    <table className={styles.wrapper}>
      <thead>
        <tr className={styles.row}>
          <th className={styles.cell}> # </th>
          <th className={styles.cell}> Miasto </th>
          <th className={styles.cell}> Średnia prognozowana temperatura </th>
        </tr>
      </thead>
      <tbody>
        {cities.map(city => (
          <Row key={city} city={city} click={click} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;

/* <Row key={city.id} city={city} click={click} /> */

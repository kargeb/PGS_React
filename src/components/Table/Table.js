import React from "react";
import styles from "./Table.module.css";
import Row from "./Row/Row";
import Button from "../Button/Button";

const Table = ({ cities, click, apiData }) => {
  // console.log(apiData[0]);

  // if (apiData[0]) {
  //   console.log(apiData[0].city.name);
  // }

  // apiData.map(city => console.log(city.city.name));

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
        {apiData.map((city, i) => (
          <tr key={city.city.id} className={styles.row}>
            <td>{i + 1}</td>
            <td> {city.city.name} </td>
            <td> {city.city.id} </td>
            <td>
              <Button click={click} city={city.city.name}>
                Usuń
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

/* <Row key={city.id} city={city} click={click} /> */

import React from "react";
import styles from "./Table.module.css";
import Row from "./Row/Row";
import Button from "../Button/Button";
import Temp from "../Temp/Temp";
import { Link } from "react-router-dom";

const Table = ({ click, apiData, details, celsius }) => {
  return (
    <table className={styles.wrapper}>
      <thead>
        <tr className={styles.row}>
          <th className={styles.cell}> # </th>
          <th className={styles.cell}>Miasto</th>
          <th className={styles.cell}> Średnia prognozowana temperatura </th>
        </tr>
      </thead>
      <tbody>
        {apiData.map((city, i) => (
          <tr key={city.city.id} className={styles.row}>
            <td>{i + 1}</td>
            <Link to="/details">
              <td onClick={details} name={city.city.name}>
                {city.city.name}
              </td>
            </Link>
            <td>
              <Temp city={city} celsius={celsius} />
            </td>
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

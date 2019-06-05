import React from "react";
import styles from "./Table.module.css";
import Button from "../Button/Button";
import Temp from "../Temp/Temp";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faMinusCircle} />;

const Table = ({ removeCity, apiData, details, celsius }) => {
  return (
    <table className={styles.wrapper}>
      <thead className={styles.theadTopBorder}>
        <tr className={styles.row}>
          <th className={styles.cellLp}> # </th>
          <th className={styles.cellCity}>Miasto</th>
          <th className={styles.cellTemp}>Średnia prognozowana temperatura</th>
          <th className={styles.cellButton} />
        </tr>
      </thead>
      <tbody>
        {apiData.map((city, i) => (
          <tr key={city.city.id} className={styles.row}>
            <td className={styles.cellLp}>{i + 1}</td>
            <td className={styles.cellCity}>
              <Link to="/details" className={styles.link}>
                <span onClick={details} name={city.city.name}>
                  {city.city.name}
                </span>
              </Link>
            </td>

            <td className={styles.cellTemp}>
              <Temp city={city} celsius={celsius} />
            </td>
            <td className={styles.cellButton}>
              <Button removeCity={removeCity} city={city.city.name}>
                {element} Usuń
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

import React from "react";
import { Link } from "react-router-dom";
import HeaderLabel from "../../components/HeaderLabel/HeaderLabel";
import Temp from "../../components/Temp/Temp";
import styles from "./Details.module.css";

const Details = ({ details, celsius, match }) => {
  console.log(match);
  console.log(details);

  return (
    <>
      <HeaderLabel />
      <div className={styles.wrapper}>
        {details && (
          <>
            <h1>{details.city.name}</h1>
            <div className={styles.description}>
              <div className={styles.row}>
                <div className={styles.cell}>Szerokość geograficzna:</div>
                <div className={styles.cell}>{details.city.coord.lat}</div>
              </div>
              <div className={styles.row}>
                <div className={styles.cell}>Szerokość geograficzna:</div>
                <div className={styles.cell}>{details.city.coord.lon}</div>
              </div>
              <div className={styles.row}>
                <div className={styles.cell}>Średnia temperatura:</div>
                <div className={styles.cell}>
                  <Temp city={details} celsius={celsius} />
                </div>
              </div>
            </div>
            {/* <ul>
              <li>{details.city.name}</li>
              <li>{details.city.coord.lat}</li>
              <li>{details.city.coord.lon}</li>
              <li>
                <Temp city={details} celsius={celsius} />
              </li>
            </ul> */}
          </>
        )}
        <Link to="/">
          <button className={styles.button}>Powrót </button>
        </Link>
      </div>
    </>
  );
};

export default Details;

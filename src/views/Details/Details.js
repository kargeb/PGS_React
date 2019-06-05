import React from "react";
import { Link } from "react-router-dom";
import HeaderLabel from "../../components/HeaderLabel/HeaderLabel";
import Temp from "../../components/Temp/Temp";

const Details = ({ details, celsius }) => {
  return (
    <>
      <HeaderLabel />
      <h1>Details</h1>
      {details && (
        <ul>
          <li>{details.city.name}</li>
          <li>{details.city.coord.lat}</li>
          <li>{details.city.coord.lon}</li>
          <li>
            <Temp city={details} celsius={celsius} />
          </li>
        </ul>
      )}
      <Link to="/">Powrót</Link>
    </>
  );
};

export default Details;

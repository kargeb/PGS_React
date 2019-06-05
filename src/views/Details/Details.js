import React from "react";
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
    </>
  );
};

export default Details;

import React from "react";
import HeaderLabel from "../../components/HeaderLabel/HeaderLabel";
import Temp from "../../components/Temp/Temp";

const Details = () => {
  return (
    <>
      <HeaderLabel />
      <h1>Details</h1>;
      {this.state.details && (
        <ul>
          <li>{this.state.details.city.name}</li>
          <li>{this.state.details.city.coord.lat}</li>
          <li>{this.state.details.city.coord.lon}</li>
          <li>
            <Temp city={this.state.details} celsius={this.state.celsius} />
          </li>
        </ul>
      )}
    </>
  );
};

export default Details;

import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";
import Table from "../../components/Table/Table";
import HeaderLabel from "../../components/HeaderLabel/HeaderLabel";

const Landing = ({
  removeCity,
  addCity,
  cities,
  apiData,
  details,
  celsius
}) => {
  return (
    <div>
      <HeaderLabel />
      <Link to="/settings">
        <h3>Ustawienia</h3>
      </Link>
      <Form addCity={addCity} />
      <Table
        removeCity={removeCity}
        cities={cities}
        apiData={apiData}
        details={details}
        celsius={celsius}
      />
    </div>
  );
};

export default Landing;

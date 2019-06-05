import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";
import Table from "../../components/Table/Table";
import HeaderLabel from "../../components/HeaderLabel/HeaderLabel";

const Landing = ({ addCity, cities, apiData, click, details, celsius }) => {
  return (
    <div>
      <HeaderLabel />
      <Link to="/settings">
        <h3>Ustawienia</h3>
      </Link>
      <Form addCity={addCity} />
      <Table
        cities={cities}
        apiData={apiData}
        click={click}
        details={details}
        celsius={celsius}
      />
    </div>
  );
};

export default Landing;

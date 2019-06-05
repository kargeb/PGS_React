import React from "react";
import Form from "../../components/Form/Form";
import Table from "../../components/Table/Table";
import HeaderLabel from "../../components/HeaderLabel/HeaderLabel";

const Landing = ({ addCity, cities, apiData, click, details, celsius }) => {
  return (
    <div>
      <HeaderLabel />
      <h1>Landing</h1>
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

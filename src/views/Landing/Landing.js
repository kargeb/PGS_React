import React from "react";
import FormNewCity from "../../components/FormNewCity/FormNewCity";
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
      <FormNewCity addCity={addCity} />

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

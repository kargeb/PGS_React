import React from "react";
import styles from "./Root.module.css";
import HeaderLabel from "../../components/HeaderLabel/HeaderLabel";
import Table from "../../components/Table/Table";
import { cities } from "../../data/cities";

const Root = () => {
  return (
    <div>
      <HeaderLabel />
      <Table cities={cities} />
    </div>
  );
};

export default Root;

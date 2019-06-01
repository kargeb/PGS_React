import React, { Component } from "react";
// import styles from "./Root.module.css";
import HeaderLabel from "../../components/HeaderLabel/HeaderLabel";
import Table from "../../components/Table/Table";
import { cities } from "../../data/cities";

class Root extends Component {
  state = {
    cities: [...cities]
  };

  clickHandle = e => console.log(e);

  render() {
    return (
      <div>
        <HeaderLabel />
        <Table cities={this.state.cities} click={this.clickHandle} />
      </div>
    );
  }
}

export default Root;

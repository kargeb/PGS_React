import React, { Component } from "react";
// import styles from "./Root.module.css";
import HeaderLabel from "../../components/HeaderLabel/HeaderLabel";
import Table from "../../components/Table/Table";
import { citiesNames } from "../../data/cities";
import Button from "../../components/Button/Button";

class Root extends Component {
  state = {
    cities: [...citiesNames]
  };

  clickHandle = e => {
    // console.log(e.target.name);

    const newCity = e.target.name;

    this.setState(prevState => {
      return {
        cities: [...prevState.cities, newCity]
      };
    });
  };

  buttonHandle = e => console.log(e.parent);

  render() {
    return (
      <div>
        <HeaderLabel />
        <Button showLog={this.buttonHandle} />
        <Table cities={this.state.cities} click={this.clickHandle} />
      </div>
    );
  }
}

export default Root;

import React, { Component } from "react";
// import styles from "./Root.module.css";
import HeaderLabel from "../../components/HeaderLabel/HeaderLabel";
import Table from "../../components/Table/Table";
import { citiesNames } from "../../data/cities";
import Button from "../../components/Button/Button";

class Root extends Component {
  state = {
    addingCity: "",
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

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state.addingCity);

    const newCity = this.state.addingCity;

    this.setState(prevState => {
      return {
        cities: [...prevState.cities, newCity],
        addingCity: ""
      };
    });
  };

  handleChange = event => {
    this.setState({ addingCity: event.target.value });
    console.log(this.state.addingCity);
  };

  render() {
    return (
      <div>
        <HeaderLabel />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Nazwa miasta"
            value={this.state.addingCity}
            onChange={this.handleChange}
          />
          <input type="submit" value="Dodaj" />
        </form>
        <Button showLog={this.buttonHandle} />
        <Table cities={this.state.cities} click={this.clickHandle} />
      </div>
    );
  }
}

export default Root;

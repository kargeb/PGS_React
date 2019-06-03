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
    const newCity = e.target.name;

    const currentCities = [...this.state.cities];
    console.log(" current cities: " + currentCities);
    console.log(newCity);
    var index = currentCities.indexOf(newCity);
    currentCities.splice(index, 1);

    this.setState({ cities: currentCities });

    // this.setState(prevState => {
    //   return {
    //     cities: [...prevState.cities, newCity]
    //   };
    // });
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

  checkWeather = () => {
    const URL_LEFT_PART = "http://api.openweathermap.org/data/2.5/forecast?q=";
    const URL_RIGHT_PART =
      "&appid=09d095681879bfdc3462857a2653dc8c&units=metric";

    // http://api.openweathermap.org/data/2.5/forecast?q=lancut&appid=09d095681879bfdc3462857a2653dc8c&units=metric
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

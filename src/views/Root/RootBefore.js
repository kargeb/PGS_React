import React, { Component } from "react";
// import styles from "./Root.module.css";
import HeaderLabel from "../../components/HeaderLabel/HeaderLabel";
import Table from "../../components/Table/Table";
// import { citiesNames } from "../../data/cities";
import Button from "../../components/Button/Button";

class Root extends Component {
  state = {
    addingCity: "",
    cities: [],
    apiData: []
  };

  removeCity = e => {
    const chosenCity = e.target.name;

    console.log("jestem w remove" + chosenCity);
    // const currentCities = this.getCitiesFromStorage();

    console.log(localStorage);
    localStorage.removeItem(chosenCity);
    console.log(localStorage);

    // const currentCities = [...this.state.cities];
    // console.log(" current cities: " + currentCities);
    // console.log(chosenCity);
    // var index = currentCities.indexOf(chosenCity);
    // currentCities.splice(index, 1);
    this.setState({ cities: this.getCitiesFromStorage(), addingCity: "" }, () =>
      this.state.cities.map(city => this.checkWeather(city))
    );
  };

  addCity = e => {
    e.preventDefault();

    const newCity = this.state.addingCity.toUpperCase().toLowerCase();

    localStorage.setItem(newCity, "");

    this.setState(
      { cities: this.getCitiesFromStorage(), addingCity: "", apiData: [] },
      () => this.state.cities.map(city => this.checkWeather(city))
    );
  };

  //   componentDidUpdate() {
  //     console.log("DID UPDATE");
  //   }

  getCitiesFromStorage = () => {
    const cities = [];

    for (let i = 0; i < localStorage.length; i++) {
      console.log(localStorage.key(i));

      cities.push(localStorage.key(i));
    }

    return cities;
  };

  componentDidMount() {
    // this.state.cities.map(city => this.checkWeather(city));

    console.log("start");
    this.setState({ cities: this.getCitiesFromStorage() }, () =>
      this.state.cities.map(city => this.checkWeather(city))
    );

    // this.state.cities.map(city => localStorage.setItem(city, ""));
    console.log(this.state.cities);
    // this.state.cities.map(city => this.checkWeather(city));
    // console.log(localStorage.length);
    // localStorage.setItem("property", "dupka");

    // // dodaje właściwość animal
    // localStorage.setItem("animal", "pies");
    // console.log(localStorage.length);

    // fetch("https://randomuser.me/api/?format=json&results=10")
    //   .then(res => res.json())
    //   .then(json => this.setState({ contacts: json.results }));
  }

  //   componentDidUpdate() {
  //     this.state.cities.map(city => this.checkWeather(city));
  //   }

  checkWeather = city => {
    // const URL_LEFT_PART = "http://api.openweathermap.org/data/2.5/forecast?q=";
    // const URL_RIGHT_PART =
    //   "&appid=09d095681879bfdc3462857a2653dc8c&units=metric";

    fetch(
      "http://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&appid=09d095681879bfdc3462857a2653dc8c&units=metric"
    )
      .then(res => res.json())
      .then(json => this.setState(prevState => prevState.apiData.push(json)));

    //   .then(json => this.setState({ apiData: json }));

    // console.log();

    // .then(json => this.setState({ contacts: json.results }));

    // http://api.openweathermap.org/data/2.5/forecast?q=lancut&appid=09d095681879bfdc3462857a2653dc8c&units=metric
  };

  clearStorage = () => {
    console.log("jestem w clear");
    localStorage.clear();
  };

  handleChange = event => {
    this.setState({ addingCity: event.target.value });
    // console.log(this.state.addingCity);
  };

  render() {
    return (
      <div>
        <HeaderLabel />
        <form onSubmit={this.addCity}>
          <input
            type="text"
            placeholder="Nazwa miasta"
            value={this.state.addingCity}
            onChange={this.handleChange}
          />
          <input type="submit" value="Dodaj" />
        </form>
        <Button clearStorage={this.clearStorage} />
        <Table
          cities={this.state.cities}
          apiData={this.state.apiData}
          click={this.removeCity}
        />
        {/* <ul>
          {this.state.apiData.map(city => (
            <li>{city.city.name}</li>
          ))}
        </ul> */}
      </div>
    );
  }
}

export default Root;

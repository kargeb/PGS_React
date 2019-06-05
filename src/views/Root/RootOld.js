import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import styles from "./Root.module.css";
import HeaderLabel from "../../components/HeaderLabel/HeaderLabel";
import Table from "../../components/Table/Table";
// import { citiesNames } from "../../data/cities";
import Button from "../../components/Button/Button";
import Temp from "../../components/Temp/Temp";
import Settings from "../Settings/Settings";
import Form from "../../components/Form/Form";
import Details from "../Details/Details";
import Landing from "../Landing/Landing";

class Root extends Component {
  state = {
    cities: [],
    apiData: [],
    details: "",
    celsius: true
  };

  removeCity = e => {
    const chosenCity = e.target.name;

    console.log("jestem w remove" + chosenCity);

    const newData = this.state.apiData.filter(
      city => city.city.name !== chosenCity
    );

    console.log(newData);

    this.setState({ apiData: [...newData] });
  };

  addCity = e => {
    e.preventDefault();

    console.log("JESTEM W ADD CITY");
    console.log(e.target[0].value);

    const newCity = e.target[0].value.toUpperCase().toLowerCase();

    this.setState(prevState => ({
      cities: [...prevState.cities, newCity]
    }));

    this.checkWeather(newCity);
  };

  // getCitiesFromStorage = () => {
  //   const cities = [];

  //   for (let i = 0; i < localStorage.length; i++) {
  //     console.log(localStorage.key(i));

  //     cities.push(localStorage.key(i));
  //   }

  //   return cities;
  // };

  componentDidMount() {
    console.log("start");

    console.log(this.state.cities.length);

    console.log("loacl stroage length " + localStorage.length);

    const localItems = [];

    for (let i = 0; i < localStorage.length; i++) {
      console.log(localStorage.key(i));
      localItems.push(localStorage.key(i));
    }

    console.log(localItems);

    this.setState({ cities: [...localItems] }, () =>
      this.state.cities.map(city => this.checkWeather(city))
    );

    // this.state.cities.map(city => this.checkWeather(city));
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("DID UPDATE!");
    this.saveInStorage();
  }

  checkWeather = city => {
    fetch(
      "http://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&appid=09d095681879bfdc3462857a2653dc8c&units=metric"
    )
      .then(res => res.json())
      .then(json => {
        if (json.cod == 404) {
          console.log("BŁĄD");
          return false;
        } else if (this.checkDuplicate(json)) {
          console.log("JUŻ JEST TAKIE MIASTO");
          return false;
        } else {
          this.setState(prevState => prevState.apiData.push(json));
          return json;
        }
      });
  };

  checkDuplicate = newCity => {
    let same = false;

    this.state.apiData.forEach(city => {
      if (city.city.id == newCity.city.id) {
        same = true;
      }
    });

    return same;
  };

  clearStorage = () => {
    console.log("jestem TU");
    console.log(this.state.apiData[0].city.name);
  };

  saveInStorage = () => {
    console.log("JESTESMY W SAVE");
    localStorage.clear();
    this.state.apiData.map(city =>
      localStorage.setItem(city.city.name, JSON.stringify(city))
    );
  };

  showDetalis = event => {
    console.log(event.target.innerText);

    const chosenCity = this.state.apiData.filter(
      city => city.city.name == event.target.innerText
    );

    console.log(chosenCity[0]);
    this.setState({ details: chosenCity[0] });
  };

  handleRadio = unit => {
    this.setState({
      celsius: unit
    });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Landing
                  {...props}
                  addCity={this.addCity}
                  cities={this.state.cities}
                  apiData={this.state.apiData}
                  click={this.removeCity}
                  details={this.showDetalis}
                  celsius={this.state.celsius}
                />
              )}
            />
            <Route
              path="/details"
              render={props => (
                <Details
                  {...props}
                  details={this.state.details}
                  celsius={this.state.celsius}
                />
              )}
            />
            <Route
              path="/settings"
              render={props => (
                <Settings
                  {...props}
                  handleRadio={this.handleRadio}
                  celsius={this.state.celsius}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
        {/* <Landing
          addCity={this.addCity}
          cities={this.state.cities}
          apiData={this.state.apiData}
          click={this.removeCity}
          details={this.showDetalis}
          celsius={this.state.celsius}
        /> */}
        {/* <Settings
          handleRadio={this.handleRadio}
          celsius={this.state.celsius}
        /> */}
        {/* <Details
          details={this.state.details}
          celsius={this.state.celsius}
        /> */}
        {/* <HeaderLabel /> */}
        {/* <Form addCity={this.addCity} /> */}
        {/* <Button click={this.saveInStorage}>Zapisz</Button> */}
        {/* <Table
          cities={this.state.cities}
          apiData={this.state.apiData}
          click={this.removeCity}
          details={this.showDetalis}
          celsius={this.state.celsius}
        /> */}

        {/* <form>
          <input
            id="celsius"
            type="radio"
            checked={this.state.celsius === true}
            onChange={() => this.handleRadio(true)}
          />
          <label htmlFor="celsius">Celsjusz</label>
          <input
            id="fahrenheit"
            type="radio"
            checked={this.state.celsius === false}
            onChange={() => this.handleRadio(false)}
          />
          <label htmlFor="fahrenheit">Fahrenheit</label>
        </form> */}

        {/* {this.state.details && (
          <ul>
            <li>{this.state.details.city.name}</li>
            <li>{this.state.details.city.coord.lat}</li>
            <li>{this.state.details.city.coord.lon}</li>
            <li>
              <Temp city={this.state.details} celsius={this.state.celsius} />
            </li>
          </ul>
        )} */}
      </div>
    );
  }
}

export default Root;

import React, { Component } from "react";
// import styles from "./Root.module.css";
import HeaderLabel from "../../components/HeaderLabel/HeaderLabel";
import Table from "../../components/Table/Table";
// import { citiesNames } from "../../data/cities";
import Button from "../../components/Button/Button";
import Temp from "../../components/Temp/Temp";
import Settings from "../Settings/Settings";
import Details from "../Details/Details";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class Root extends Component {
  state = {
    addingCity: "",
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

    const newCity = this.state.addingCity.toUpperCase().toLowerCase();

    this.setState(prevState => ({
      cities: [...prevState.cities, newCity],
      addingCity: ""
    }));

    this.checkWeather(newCity);
  };

  getCitiesFromStorage = () => {
    const cities = [];

    for (let i = 0; i < localStorage.length; i++) {
      console.log(localStorage.key(i));

      cities.push(localStorage.key(i));
    }

    return cities;
  };

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

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("did update");
  //   console.log(prevState.apiData);
  //   console.log(prevState.apiData.length === this.state.apiData.length);
  //   console.log(this.state.apiData);
  // }

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

  handleChange = event => {
    this.setState({ addingCity: event.target.value });
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
      <BrowserRouter>
        <div>
          <HeaderLabel />
          <h1>ROOT</h1>
        </div>

        <Switch>
          <Route exact path="/" component={Root} />
          <Route path="/details" component={Details} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Root;

import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Settings from "../Settings/Settings";
import Details from "../Details/Details";
import Landing from "../Landing/Landing";

const Child = ({ match }) => {
  console.log("match" + match);

  return (
    <div>
      <h3> ID: </h3>
    </div>
  );
};

class Root extends Component {
  state = {
    cities: [],
    apiData: [],
    details: "",
    celsius: true
  };

  removeCity = e => {
    const chosenCity = e.target.name;

    const newData = this.state.apiData.filter(
      city => city.city.name !== chosenCity
    );

    this.setState({ apiData: [...newData] });
  };

  addCity = e => {
    e.preventDefault();

    const newCity = e.target[0].value.toUpperCase().toLowerCase();

    this.setState(prevState => ({
      cities: [...prevState.cities, newCity]
    }));

    this.checkWeather(newCity);
  };

  componentDidMount() {
    const localItems = [];

    for (let i = 0; i < localStorage.length; i++) {
      localItems.push(localStorage.key(i));
    }

    this.setState({ cities: [...localItems] }, () =>
      this.state.cities.map(city => this.checkWeather(city))
    );
  }

  componentDidUpdate(prevProps, prevState) {
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

  saveInStorage = () => {
    localStorage.clear();
    this.state.apiData.map(city =>
      localStorage.setItem(city.city.name, JSON.stringify(city))
    );
  };

  showDetalis = event => {
    const chosenCity = this.state.apiData.filter(
      city => city.city.name === event.target.innerText
    );

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
                  removeCity={this.removeCity}
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
      </div>
    );
  }
}

export default Root;

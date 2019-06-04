import React, { Component } from "react";
// import styles from "./Root.module.css";
import HeaderLabel from "../../components/HeaderLabel/HeaderLabel";
import Table from "../../components/Table/Table";
// import { citiesNames } from "../../data/cities";
import Button from "../../components/Button/Button";

const ContactsList = ({ contacts }) => {
  console.log(contacts[0]);

  if (contacts[0]) {
    console.log("dupa" + contacts[0].cell);
  }

  return (
    <ul>
      {contacts.map(contact => (
        <li>{contact.cell}</li>
      ))}
      {/* <li>cos</li>
      <li>cos</li> */}
    </ul>
  );
};

class Root extends React.Component {
  state = {
    cities: []
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?format=json&results=10")
      .then(res => res.json())
      .then(json => this.setState({ cities: json.results }));
  }

  render() {
    return (
      <div>
        <HeaderLabel />

        <ContactsList contacts={this.state.cities} />

        {/* <form onSubmit={this.addCity}>
          <input
            type="text"
            placeholder="Nazwa miasta"
            value={this.state.addingCity}
            onChange={this.handleChange}
          />
          <input type="submit" value="Dodaj" />
        </form> */}
        {/* <Button clearStorage={this.clearStorage} /> */}
      </div>
    );
  }
}

export default Root;

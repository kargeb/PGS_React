import React, { Component } from "react";
import styles from "./FormNewCity.module.css";

class FormNewCity extends Component {
  state = {
    inputField: ""
  };

  handleInputChange = e => {
    this.setState({
      inputField: e.target.value
    });
  };

  clearInput = () => {
    setTimeout(() => {
      this.setState({
        inputField: ""
      });
    }, 0);
  };

  render() {
    return (
      <form onSubmit={this.props.addCity} className={styles.wrapper}>
        <input
          className={styles.input}
          name="new"
          type="text"
          placeholder="Nazwa miasta"
          value={this.state.inputField}
          onChange={this.handleInputChange}
          required
        />
        <button
          className={styles.button}
          type="submit"
          onClick={this.clearInput}
        >
          Dodaj
        </button>
      </form>
    );
  }
}

export default FormNewCity;

import React, { Component } from "react";

class Form extends Component {
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
      <form onSubmit={this.props.addCity}>
        <input
          name="new"
          type="text"
          placeholder="Nazwa miastaaaaaa"
          value={this.state.inputField}
          onChange={this.handleInputChange}
          required
        />
        <button type="submit" onClick={this.clearInput}>
          Dodaj
        </button>
      </form>
    );
  }
}

export default Form;

import React from "react";
import HeaderLabel from "../../components/HeaderLabel/HeaderLabel";

const Settings = () => {
  return (
    <>
      <HeaderLabel />
      <h1>Settings</h1>;
      <form>
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
      </form>
    </>
  );
};

export default Settings;

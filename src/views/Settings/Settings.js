import React from "react";
import HeaderLabel from "../../components/HeaderLabel/HeaderLabel";

const Settings = ({ handleRadio, celsius }) => {
  return (
    <>
      <HeaderLabel />
      <h1>Settings</h1>
      <form>
        <input
          id="celsius"
          type="radio"
          checked={celsius === true}
          onChange={() => handleRadio(true)}
        />
        <label htmlFor="celsius">Celsjusz</label>
        <input
          id="fahrenheit"
          type="radio"
          checked={celsius === false}
          onChange={() => handleRadio(false)}
        />
        <label htmlFor="fahrenheit">Fahrenheit</label>
      </form>
    </>
  );
};

export default Settings;

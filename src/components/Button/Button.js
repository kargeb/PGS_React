import React from "react";

const Button = ({ showLog, city }) => {
  return (
    <button onClick={showLog} name={city}>
      Usuń
    </button>
  );
};

export default Button;

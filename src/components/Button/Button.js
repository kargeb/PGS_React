import React from "react";

const Button = ({ city, children, removeCity }) => {
  return (
    <button onClick={removeCity} name={city}>
      {children}
    </button>
  );
};

export default Button;

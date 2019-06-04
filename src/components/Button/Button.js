import React from "react";

const Button = ({ city, children, click }) => {
  return (
    <button onClick={click} name={city}>
      {children}
    </button>
  );
};

export default Button;

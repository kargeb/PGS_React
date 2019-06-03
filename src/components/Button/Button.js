import React from "react";

const Button = ({ clearStorage, city }) => {
  return (
    <button onClick={clearStorage} name={city}>
      Remove
    </button>
  );
};

export default Button;

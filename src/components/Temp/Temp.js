import React from "react";

function calculateAverageTemp(data) {
  let temp = 0;
  for (let i = 0; i < data.list.length; i++) {
    temp += data.list[i].main.temp;
  }
  temp = temp / data.list.length;

  return Math.trunc(temp);
}

const Temp = ({ city, celsius }) => (
  <>
    {celsius ? (
      <span> {calculateAverageTemp(city)}&#8451; </span>
    ) : (
      <span>{Math.trunc(calculateAverageTemp(city) * 1.8 + 32)}&#8457;</span>
    )}
  </>
);

export default Temp;

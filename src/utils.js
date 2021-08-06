import { useRef, useEffect } from "react";

export const formatPopulation = (population) => {
  const populationString = population.toString();
  if (population.length <= 3) {
    return;
  }
  const populationArray = populationString.split("");
  const formatedPopulation = [];
  for (let i = populationArray.length - 1; i >= 0; i--) {
    formatedPopulation.unshift(
      `${(populationArray.length - i) % 3 === 0 ? " " : ""}${
        populationArray[i]
      }`
    );
  }
  return formatedPopulation.join("");
};

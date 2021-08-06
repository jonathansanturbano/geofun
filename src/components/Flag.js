import React from "react";
// import { AiFillQuestionCircle } from "react-icons/ai";

const Flag = ({ country }) => {
  return (
    <div>
      {country.countryCode && (
        <img
          src={`https://www.countryflags.io/${country.countryCode.toLowerCase()}/shiny/64.png`}
          alt="flag"
          className="mx-auto my-16 w-16 h-16"
        />
      )}
    </div>
  );
};

export default Flag;

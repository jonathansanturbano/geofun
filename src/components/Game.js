import React from "react";
import Form from "./Form";
import Flag from "./Flag";
import { AiFillCheckCircle } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";
import { Alert, Button } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";

const Game = ({
  handleClick,
  country,
  handleSubmit,
  guess,
  handleChange,
  correct,
  wrongAnswers,
  showExplanation,
  setShowExplanation,
}) => {
  return (
    <div className="container mx-auto">
      <div className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
        <div className="text-center relative">
          <button onClick={handleClick} className="text-2xl underline">
            {(Object.keys(country).length === 0 && "Click Me") ||
              "Another Flag"}
          </button>
          <Flag country={country} />
          <div className="flex relative">
            {Object.keys(country).length > 0 && (
              <Form
                handleSubmit={handleSubmit}
                guess={guess}
                handleChange={handleChange}
              />
            )}
            {correct && (
              <AiFillCheckCircle className="text-green-500" size={32} />
            )}
            {correct === false && (
              <IoIosCloseCircle className="text-red-500" size={32} />
            )}
            {wrongAnswers >= 3 && (
              <details className="italic text-center absolute -bottom-7 w-full">
                <summary>Hint?</summary>
                <p>Population: {country.population}</p>
              </details>
            )}
          </div>
          {Object.keys(country).length > 0 && (
            <CSSTransition
              in={showExplanation}
              timeout={300}
              classNames="alert"
              unmountOnExit
            >
              <Alert
                variant="primary"
                dismissible
                onClose={() => setShowExplanation(false)}
                className="absolute bottom-0 bg-white w-full left-0"
              >
                <Alert.Heading>{country.name.toUpperCase()}</Alert.Heading>
                <p>{country.capital}</p>
                <p>{country.population}</p>
                <Button onClick={() => handleClick()}>Close</Button>
              </Alert>
            </CSSTransition>
          )}
        </div>
      </div>
    </div>
  );
};

export default Game;

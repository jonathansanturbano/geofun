import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Game from "./components/Game";
import axios from "axios";
import { formatPopulation } from "./utils";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});
  const [guess, setGuess] = useState("");
  const [correct, setCorrect] = useState(null);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    axios.get(`https://restcountries.eu/rest/v2/all`).then((res) => {
      const countries = res.data;
      const filteredCountries = countries.map((country) => {
        let {
          name,
          alpha2Code: countryCode,
          capital,
          region,
          population,
        } = country;
        population = formatPopulation(population);
        name = name.toLowerCase();
        if (name === "macedonia (the former yugoslav republic of)") {
          name = "macedonia";
        }
        if (name === "russian federation") {
          name = "russia";
        }
        if (name === "united states of america") {
          name = "united states";
        }
        if (name === "palestine, state of") {
          name = "palestine";
        }

        if (name === "korea (republic of)") {
          name = "south korea";
        }
        if (name === "venezuela (bolivarian republic of)") {
          name = "venezuela";
        }
        return { name, countryCode, capital, region, population };
      });
      setCountries(filteredCountries);
    });
  }, []);

  useEffect(() => {
    setWrongAnswers(0);
  }, [country]);

  const handleClick = () => {
    getCountry();
  };

  const getCountry = () => {
    const randomNumber = Math.floor(Math.random() * (countries.length - 1));
    setShowExplanation(false);
    setCountry(countries[randomNumber]);
  };

  const handleChange = (e) => {
    setGuess(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const typedGuess = e.target.country.value.toLowerCase();
    if (typedGuess === country.name) {
      setCorrect(true);
      setGuess("");
      setWrongAnswers(0);
      setShowExplanation(true);
      // getCountry();
    } else {
      setCorrect(false);
      setWrongAnswers(wrongAnswers + 1);
    }
    // Fix it always shows at +1 (meaning after 3 in this case)
    if (wrongAnswers >= 2) {
      console.log("show hint");
    }
  };

  return (
    <div className="App">
      <Navbar />
      <main>
        <Game
          country={country}
          handleClick={handleClick}
          guess={guess}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          correct={correct}
          wrongAnswers={wrongAnswers}
          showExplanation={showExplanation}
          setShowExplanation={setShowExplanation}
        />
      </main>
    </div>
  );
}

export default App;

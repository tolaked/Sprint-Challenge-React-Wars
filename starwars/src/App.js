import React, { useState } from "react";
import { DisplayCharacters } from "./components/DisplayCharacters/DisplayCharacters";
import axios from "axios";
import "./App.css";

const App = () => {
  //   // Try to think through what state you'll need for this app before starting. Then build out
  //   // the state properties here.

  //   // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  //   // side effect in a component, you want to think about which state and/or props it should
  //   // sync up with, if any.
  const [state, setState] = useState([]);

  const myStarWars = () => {
    fetch("https://swapi.co/api/people/")
      .then(res => {
        return res.json();
      })
      .then(data => {
        setState(data.results);
        console.log(data);
      })
      .catch(error => {
        return "Something went wrong";
      });
  };
  React.useEffect(myStarWars, []);

  return (
    <>
      <header className="main-header">
        <div className="container">
          <h1 className="Header">React StarWars</h1>
        </div>
      </header>
      <DisplayCharacters starwarsChars={state} />
    </>
  );
};

export default App;

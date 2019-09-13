import React, { useState } from "react";
import { DisplayCharacters } from "./components/DisplayCharacters/DisplayCharacters";
import { ButtonComponent } from "./components/ButtonComp/Button";
import axios from "axios";
import "./App.css";

const App = () => {
  //   // Try to think through what state you'll need for this app before starting. Then build out
  //   // the state properties here.

  //   // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  //   // side effect in a component, you want to think about which state and/or props it should
  //   // sync up with, if any.
  const [state, setState] = useState({
    starwarsChars: []
  });

  const myStarWars = url => {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setState({
          starwarsChars: data.results,
          previous: data.previous,
          next: data.next
        });
      })
      .catch(error => {
        return "Something went wrong";
      });
  };

  React.useEffect(() => {
    myStarWars("https://swapi.co/api/people/");
  }, []);
  const { starwarsChars, previous, next } = state;

  return (
    <div>
      <header className="main-header">
        <div className="container">
          <h1 className="Header">React StarWars</h1>
        </div>
      </header>
      <DisplayCharacters starwarsChars={starwarsChars} />
      <ButtonComponent action={myStarWars} previous={previous} next={next} />
      <footer className="footer">
        <p>&copy; Designed by Adetola</p>
      </footer>
    </div>
  );
};

export default App;

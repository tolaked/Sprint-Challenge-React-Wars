import React from "react";

export const CharacterList = props => {
  const {
    name,
    gender,
    height,
    birth_year,
    hair_color,
    eye_color,
    created,
    edited
  } = props;

  return (
    <div className="single-char-list-container">
      <header>
        <h2>Name: {name}</h2>
      </header>
      <ul>
        <li>Gender: {gender}</li>
        <li>Height: {height}</li>
        <li>Birth year: {birth_year}</li>
        <li>Hair Color: {hair_color}</li>
        <li>Eye Color: {eye_color}</li>
      </ul>
      <footer>
        <p>CreatedAt: {created}</p>
        <p>EditedAt: {edited}</p>
      </footer>
    </div>
  );
};

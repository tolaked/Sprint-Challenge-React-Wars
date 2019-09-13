import React from "react";
import { CharacterList } from "../CharacterList/CharacterList";
import "./DisplayCharacter.css";

export const DisplayCharacters = props => {
  const { starwarsChars } = props;
  return (
    <section className="all-characters">
      {starwarsChars.map(character => {
        const {
          name,
          gender,
          height,
          birth_year,
          hair_color,
          eye_color,
          created,
          edited
        } = character;
        return (
          <CharacterList
            key={name}
            name={name}
            gender={gender}
            height={height}
            birth_year={birth_year}
            hair_color={hair_color}
            eye_color={eye_color}
            created={created}
            edited={edited}
          />
        );
      })}
    </section>
  );
};

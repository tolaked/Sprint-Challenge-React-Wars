import React from "react";
import styled from "styled-components";

const SingleCharacter = styled.div`
  width: 28%;
  font-size: 1rem;
  background: #272b30;
  margin-bottom: 20px;
  border-radius: 5px;
`;

const Header = styled.header`
  color: rgba(255, 255, 255, 0.74);
  background: #131111e0;
  text-align: center;
  text-transform: capitalize;
  padding: 0.5rem;
`;

const UL = styled.ul`
  padding: 1em;
  color: rgba(255, 255, 255, 0.74);
`;

const Footer = styled.footer`
  padding: 1em;
  color: rgba(250, 235, 215, 0.561);
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

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
    <SingleCharacter>
      <Header>
        <h2>Name: {name}</h2>
      </Header>
      <UL>
        <List>Gender: {gender}</List>
        <List>Height: {height}</List>
        <List>Birth year: {birth_year}</List>
        <List>Hair Color: {hair_color}</List>
        <List>Eye Color: {eye_color}</List>
      </UL>
      <Footer>
        <p>CreatedAt: {created}</p>
        <p>EditedAt: {edited}</p>
      </Footer>
    </SingleCharacter>
  );
};

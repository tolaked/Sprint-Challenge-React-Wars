import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  button {
    min-width: 10rem;
    min-height: 48px;
    padding: 0.7rem;
    text-transform: uppercase;
    background: grey;
    border: 1px solid none;
    border-radius: 2px;
    &:hover {
      background: rgba(0, 0, 0, 0.7);
      color: black;
      cursor: pointer;
      background: white;
    }
    &:disabled {
      cursor: not-allowed;
      color: black;
    }
  }
`;

export const ButtonComponent = props => {
  const { previous, next, action } = props;

  return (
    <ButtonContainer>
      <button onClick={() => action(previous)} disabled={previous === null}>
        Previous
      </button>
      <button onClick={() => action(next)} disabled={next === null}>
        Next
      </button>
    </ButtonContainer>
  );
};

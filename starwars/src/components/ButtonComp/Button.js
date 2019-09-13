import React from "react";

export const ButtonComponent = props => {
  const { previous, next, action } = props;

  return (
    <>
      <button onClick={() => action(previous)} disabled={previous === null}>
        Previous
      </button>
      <button onClick={() => action(next)} disabled={next === null}>
        Next
      </button>
    </>
  );
};

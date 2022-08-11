import React from "react";
import { StyledButton } from "../StyledButton/StyledButton";
import { ButtonContainer } from "../ButtonContainer/ButtonContainer";
import { TYPES } from "../../ActionTypes/countActions";
import { useCountContext } from "../../context/countContext";

export const Add = () => {
  const { dispatch } = useCountContext();

  const dispatcher = (type) => () => dispatch({ type });
  return (
    <ButtonContainer>
      <StyledButton onClick={dispatcher(TYPES.INCREMENT)}>+</StyledButton>
      <StyledButton onClick={dispatcher(TYPES.INCREMENT_5)}>+5</StyledButton>
      <StyledButton onClick={dispatcher(TYPES.MULTIPLICATE)}>X</StyledButton>
    </ButtonContainer>
  );
};

import React from "react";
import { StyledButton } from "../StyledButton/StyledButton";
import { ButtonContainer } from "../ButtonContainer/ButtonContainer";
import { useCountContext } from "../../context/countContext";
import { TYPES } from "../../ActionTypes/countActions";

export const Substract = () => {
  const {dispatch} = useCountContext();

  const dispatcher = (type) => () => dispatch({ type });

  return (
    <ButtonContainer>
      <StyledButton onClick={dispatcher(TYPES.DIVIDE)}>/</StyledButton>
      <StyledButton onClick={dispatcher(TYPES.DECREMENT_5)}>-5</StyledButton>
      <StyledButton onClick={dispatcher(TYPES.DECREMENT)}>-</StyledButton>
    </ButtonContainer>
  );
};

import React from "react";
import { StyledButton } from "../StyledButton/StyledButton";
import { ButtonContainer } from "../ButtonContainer/ButtonContainer";
import { TYPES } from "../../ActionTypes/countActions";
import { useCountContext } from "../../context/countContext";

export const Reset = () => {
  const { dispatch } = useCountContext();

  const dispatcher = (type) => () => dispatch({ type });
  return (
    <ButtonContainer>
      <StyledButton onClick={dispatcher(TYPES.RESET)} style={{ marginRight: "15px" }}>Reset</StyledButton>
    </ButtonContainer>
  );
};

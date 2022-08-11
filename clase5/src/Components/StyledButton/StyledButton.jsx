import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin: 0px 5px;
  border: 1px solid white;
  background-color: #282c34;
  color: white;
  border-radius: 7px;
  cursor: pointer;
`;

export const StyledButton = ({ children, onClick, style }) => {
  return (
    <Button onClick={onClick} style={style}>
      {children}
    </Button>
  );
};

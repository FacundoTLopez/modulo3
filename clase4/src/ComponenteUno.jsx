import React from "react";
import styled from "styled-components";

const StyledComp = styled.div`
  width: 300px;
  height: 100px;
  background-color: ${({ bgColor }) => bgColor};
`;

export const ComponenteUno = ({ bgColor, children }) => {
  return <StyledComp bgColor={bgColor}>{children}</StyledComp>;
};

/**
 * PROPS children; no se pasa como prop normalmente, solo se ejecuta en  el componente y react detecta por defecto que se refiere a todos los hijos que va a tener el componente
 * se usa para pasar elemntos hijo directamente en su llamado
 */
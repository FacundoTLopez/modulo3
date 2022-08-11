import React from "react";
import styled from "styled-components";

// export const Box = styled.div`
// width:100px;
// height: 100px;
// background-color: yellow;
// `;

/** Styled-components se importa al componente que queremos usar, y se utiliza ponienod styled.elemento que queremos crear (div, form, input etc)
 * luego se usan comillas invertidas `` con codigo css normal adentro
 *
 * Styled avanzado: Nesting
 * dentro del codigo de styled components, podemos hacer referencia al componente usando &, y asi estilar sus hijos
 *
 * extender estilos:
 * podemos usar todas las propiedades de un componente ya estilizado pero pisarle algunas con lo nuevo, usano styled(nombre del componente)
 * con esto se puede pisar algun estilo de un componente de libreria que no te gustó
 *
 * A styled components se le pueden pasar props, usando ${} ya que es un string, con una arrow function que tiene como parametro todas las props, (prop) o, destructurando, el nombre de la prop que queremos usar ({BgColor}) y retorna un string
 *
 */

// Algo mas complejo :

const BoxStyled = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ BgColor }) => BgColor};

  & p {
    color: salmon;
  }
`;

const BoxStyledDark = styled(BoxStyled)`
  background-color: rgba(0, 0, 0, 0.75);

  &:hover {
    background-color: white;
    border: 1px solid black;
  }
`;

const Text = styled.span`
  color: red;
`;

export const Box = ({ color = "red", text }) => {
  return (
    <BoxStyled BgColor={color}>
      <Text>{text}</Text>
    </BoxStyled>
  );
};

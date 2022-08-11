import { useReducer } from "react";
import "./App.css";
import { ComponenteUno } from "./ComponenteUno";
import { Box } from "./Components/Box/Box";
import { Name } from "./Components/Name/Name";
import { GlobalProvider } from "./Context/GlobalContext";

const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT_COUNTER:
      return {
        counter: state.counter + 1,
      };

    case DECREMENT_COUNTER:
      return {
        counter: state.counter - 1,
      };

    default:
      return state;
  }
};

function App() {
  const initialState = { counter: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      {/*3*/}
      <GlobalProvider>
        <ComponenteUno bgColor="peru">
          <button onClick={() => dispatch({ type: INCREMENT_COUNTER })}>
            +
          </button>
          {""}
          {state.counter}
          {""}
          <button onClick={() => dispatch({ type: DECREMENT_COUNTER })}>
            -
          </button>
        </ComponenteUno>
        <Box />
        <Name />
      </GlobalProvider>
    </div>
  );
}

export default App;

/**
 * EVENTOS de react; ya no se usara addEventListener(excepto cuando encontremos algun evento no manejable con react, entonces ahi debemos usarlo, y luego removerlo cuando se desmonte el componente)
 * en react el evento se pasa con camelCase, y con una funcion como handler ej: onClick ={(a) => console.log(a)}, con llaves porque es codigo js
 * el evento onChange, funciona como el evento input de js
 *
 * useReducer = un hook, alternativa a useState, se usa para manejar el estado local de componentes complejos, que al final tienen demasiados useState
 * recibe 3 parametro
 *
 * 1= la funcion reducer, que recibe dos parametros (state, action)
 * action es la accion que le mandamos al estado para ver como y que actualiza ese estado
 *
 * 2= variable initialState, que es el estado inicial de el estado en uso, se recomienda definirlo fuera del hook
 *
 * 3= funcion init, es opcional y permite transformar el estado inicial
 *
 * el return del reducer cambia el estado
 *
 * useReducer devuelve un estado y una funcion dispatch, la funcion dispatch se utiliza en el evento y  recibe un objeto con propiedades type y payload
 * en type le pasamos el tipo de accion que estamo ejecutando
 * payload es opcional
 *
 * PROP DRILLING: estrategia para poder tener un estado "global", con un componente padre que tiene este estado, y lo va pasando a sus hijos. Esto, no es buena practica, ya que es un desastre ir pasando la prop por todos los hijos (que algunos no van a usarlo) hasta el ultimo que lo necesita
 * para eso se usa API CONTEXT.
 * genera un contexto dentro del cual van a estar nuestro componentes y estos pueden acceder al estado de este contexto sin necesidad de usar drilling, esta diseñado para compartir datos que pueden conisderarse globales (un usuario autenticado, un tema, idiomas, etc..)
 */

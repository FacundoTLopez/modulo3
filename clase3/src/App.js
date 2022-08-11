import { useState } from "react";
import "./App.css";
import { Box } from "./Components/Box/Box";
import { ComponenteDos } from "./Components/ComponenteDos/ComponenteDos";
import { ComponenteUno } from "./Components/ComponenteUno/ComponenteUno";
import { GlobalStyles } from "./styles/Globalstyles";

function App() {
  const [counter, setCounter] = useState(0);
  const [count, setTimer] = useState(0);
  let timer;
  const startCount = () => {
    timer = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };
  const stopCount = () => {
    startCount();
    return () => clearInterval(timer);
  };

  const styleDiv4 = {
    height: "100px",
    width: "100px",
    backgroundColor: "purple",
  };

  return (
    <div className="App">
      {/* <div className="container-1"></div>
      <ComponenteUno />
      <div
        id="container-3"
        style={{ height: "100px", width: "100px", backgroundColor: "peru" }}
      ></div>
      <div className="container-4" style={styleDiv4}></div>
      <ComponenteDos /> */}
      {/** STYLED COMPONENTS */}
      {/* <Box color="crimson" text="Perrito"></Box>
      <Box color="tomato"></Box>
      <GlobalStyles />
      <Box color="green" text={counter} />
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button
        onClick={() => {
          setCounter((anterior) => anterior + 1);
          setCounter((anterior) => anterior + 1);
        }}
      >
        +2
      </button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => setCounter(0)}>reset</button> */}

      <Box color="peru" text={count} />

      <button onClick={() => startCount()}>Iniciar</button>
    </div>
  );
}

export default App;

/** Formas de estilar en React
 * -Con un archivo css normal ,que debe ser importado en el componente que se va a usar ej import './App.css'
 * -Con el atributo styles
 * -Con un objeto, que se puede insertar en el atributo style
 * -Librerias externas como primereact, next ui etc
 * en el curso se usara styled components
 * se instala con "npm install (o solo i) styled-components"
 * styled components permite usar css en un archivo js y generar un componente con esos estilos
 */

/**
 * los hooks son funciones que permiten usar los estados y el ciclo de vida de los componentes funcionales
 * useState: permite definir y modificar un estado de un componente
 * recibe como parametro el valor inicial del estado, y devuelve un array con el valor del estado y una funcion, en este caso es setCounter
 * esta funcion va a modificar el estado segun lo que le pasemos por parametro
 * este array se puede destructurar para darle un alias al valor y a la funcion, esto antes de usar el hook
 * ej
 * const [counter, setCounter] = useState(0)
 *
 * las funciones set son asincronicas, el resultado no va a estar disponible inmediatamente despues de la ejecucion, asi que no se puede ejecutar dos veces seguidas
 * para poder hacer esto, a setCounter se le pasa un callback, que recibe el valor anterior del estado y devuelve la modificacion
 *
 * useRef = define una refrencia a un elemento del dom, esto se puede definir como null en un principio y luego redefinirse
 * primero se llama a useRef, que es un hook
 * const refContainer = useRef(valorInicial)
 * luego se asigna al elemento del dom con la propiedad ref
 * <div ref={refContainer}/>
 * para acceder a las propiedades del elemento, se usa .current
 * ej refContainer.current.style.color = "red"
 *
 * useEffect = un hook, que permite manejar los ciclos de vida de los componentes
 * recibe 2 parametros, un callback (NO puede ser asincrona) y una lista de dependencias, que es un array, o nada en el segundo parametro
 * Si se le pasa un array vacio, la funcion se ejecutara solo cuando se monte el componente
 * Si no se le pasa nada, se ejecutara cada vez que algo cambie en el componente
 * Y se ejecutara cuando el componente se desmonte, si dentro le pasamos un return y la funcion ej:
 * useEffect(() => {
 *  return () => {
 *    console.log("Fase de desmontaje")
 *  }
 * })
 *
 * Si el array tiene algo adentro, el useEffect se ejecutara cuando ese algo sufra algun cambio
 *
 * Etapas y sus ejecuciones:
 * Montaje => []
 * Actualizacion => [dependencias]
 * Desmontaje => return () => {}
 * 
 *
 */

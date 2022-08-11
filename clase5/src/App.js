import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./Components/CounterComp/Counter";
import { CountContextProvider } from "./context/countContext";

function App() {
  return (
    <div className="App">
      <CountContextProvider>
        <header className="App-header">
          <Counter />
        </header>
      </CountContextProvider>
    </div>
  );
}

export default App;

/**
 * Clase de repaso
 * Formas de definir un estado:
 * useState, nos permite definir un estado y nos provee de una funcion para modificarlo
 * useReducer, se puede usar cuando un estado es muy complicado y hay que usar muchos useState
 *
 * Como definir un estado global, y que es:
 * createContext, para definir un contexto global
 *
 */

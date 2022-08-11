import { useState } from "react";
import { useContext } from "react";
import { Children, createContext } from "react";

/*1*/ const GlobalContext = createContext({
  user: null,
});

/*4*/ export const useGlobalContext = () => useContext(GlobalContext);

/*2*/ export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState({
    user: null,
  });

  const handleChange = (e) => setUser({ user: e.target.value });

  return (
    <GlobalContext.Provider value={{ user: user.user, handleChange }}>
      {children}
    </GlobalContext.Provider>
  );
};

/**
 * 1- en un nuevo archivo creamos un contexto nuevo, este puede o no tener un valor por defecto, que sera el estado inicial global
 * el contexto viene con un componente que es el provider
 * provider va a tener hijos y es el que provee del contexto global a sus hijos, tiene una prop value que es el valor que se va a pasar a los componentes que lo consuman
 * puedo tener varios contextos y providers anidados
 * 2- generamos el provider, y le pasamos children (este debe exportarse)
 * 3- lo "insertamos" en nuestra app
 * 4- creamos un hook para el useContext(esto es opcional, para no tener que llamar al hook Y al contexto cada vez que quiera usarlo), tambien debe ser exportado, con useContext es para consumir el contexto, el cual recibe por parametro
 */

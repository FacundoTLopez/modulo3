import React from "react";
import { useGlobalContext } from "../../Context/GlobalContext";

export const Box = () => {
  const { user, handleChange } = useGlobalContext();
  //   const contextValue = useGlobalContext();
  return (
    <div>
      <input onChange={handleChange} value={user} />
    </div>
  );
};

import React from "react";
import { useGlobalContext } from "../../Context/GlobalContext";

export const Name = () => {
  const { user } = useGlobalContext();
  return <div>{user}</div>;
};

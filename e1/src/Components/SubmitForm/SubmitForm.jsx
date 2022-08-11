import React from "react";

export const SubmitForm = ({
  style,
  addTask,
  updateTaskDb,
  clearTaskDb,
  newItem,
}) => {
  return (
    <div>
      <form style={style} onSubmit={updateTaskDb} >
        <input onChange={addTask} value={newItem}></input>
        <button>Agregar</button>
      </form>
      <button onClick={clearTaskDb}>Limpiar lista</button>
    </div>
  );
};

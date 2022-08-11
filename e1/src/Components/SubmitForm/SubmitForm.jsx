import React from "react";

export const SubmitForm = ({
  style,
  addTask,
  updateTaskDb,
  clearTaskDb,
  newItem,
  taskDB
}) => {
  return (
    <div>
      <form style={style} onSubmit={updateTaskDb} >
        <input onChange={addTask} value={newItem}></input>
        <button>Agregar</button>
      </form>
      <button onClick={clearTaskDb} disabled={taskDB.length <= 0 ? true : false} >Limpiar lista</button>
    </div>
  );
};

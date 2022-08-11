import React from "react";
import styled from "styled-components";
const Task = styled.li`
    width: 100%;
`

export const TodoList = ({ taskDB }) => {
  return (
    <div>
      <ul>
        {taskDB.map((task) => {
          return <Task key={task + Math.random()}>{task}</Task>;
        })}
      </ul>
    </div>
  );
};

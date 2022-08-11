import { useState } from "react";
import "./App.css";
import { SubmitForm } from "./Components/SubmitForm/SubmitForm";
import { TodoList } from "./Components/TodoList/TodoList";

function App() {
  const [taskDB, setTaskDB] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addTask = ({ target }) => setNewItem(target.value);

  const updateTaskDb = (e) => {
    e.preventDefault();
    if (newItem) {
      setTaskDB([newItem, ...taskDB]);
      setNewItem("");
    }
  };

  const clearTaskDb = () => {
    setTaskDB([]);
  };

  return (
    <div className="App">
      <SubmitForm
        style={{ marginTop: "30px" }}
        addTask={addTask}
        updateTaskDb={updateTaskDb}
        clearTaskDb={clearTaskDb}
        newItem={newItem}
      ></SubmitForm>
      <TodoList taskDB={taskDB} />
    </div>
  );
}

export default App;

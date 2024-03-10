import { useState } from "react";

const ToDoListApp = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handelTask(event) {
    setTask(event.target.value);
    console.log(task);
  }

  function addTask() {
    setTaskList((prevTasks) => [...prevTasks, task]);

    // console.log(taskList)

    setTask("");
  }

  function deleteTask(index) {
    const updatedList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedList);
  }

  return (
    <>
      <h2>To Do List App</h2>
      <input
        type="text"
        placeholder="Add Task"
        onChange={(e) => handelTask(e)}
      />
      <button
        type="submit"
        style={{ border: "1px solid black", margin: "10px" }}
        onClick={() => addTask()}
      >
        {" "}
        Add
      </button>
      <div>
        {taskList.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button onClick={() => deleteTask(index)}>delete</button>
          </li>
        ))}
      </div>
    </>
  );
};

export default ToDoListApp;

import "./App.css";
import { useState } from "react";
import "animate.css";

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleButtonClick = async (id) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id == id) {
          return {
            id: task.id,
            taskname: task.taskname,
            completed: task.completed,
            isexiting: true
          };
        } else {
          return task;
        }
      })
    );
    function timeout(delay) {
      return new Promise((res) => setTimeout(res, delay));
    }
    await timeout(1000);
    const newl = taskList.filter((element) => id !== element.id);
    setTaskList(newl);
  };
  const handleClick = () => {
    const task = {
      id: taskList.length === 0 ? 0 : taskList[taskList.length - 1].id + 1,
      taskname: newTask,
      completed: false,
      isexiting: false
    };

    const arr = [...taskList, task];
    setTaskList(arr);
  };
  const handleTextChange = (event) => {
    setNewTask(event.target.value);
  };
  const chooseclass = (task) => {
    if (task.completed && task.isexiting) {
      return "animate__animated animate__fadeOutUp";
    }
    if (task.completed) {
      return "animate__animated animate__tada";
    }
    if (task.isexiting) {
      return "animate__animated animate__fadeOutUp";
    }
    return "animate__animated animate__fadeInUp";
  };
  const completeTask = (id) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id == id) {
          return { id: task.id, taskname: task.taskname, completed: true };
        } else {
          return task;
        }
      })
    );
  };
  return (
    <div className="App">
      <h1>Todo list app</h1>

      <input type="text" onChange={handleTextChange} />
      <button onClick={handleClick}>add task</button>
      {taskList.map((element, key) => (
        <p
          className={chooseclass(element)}
          style={{ backgroundColor: element.completed ? "green" : "white" }}
        >
          {key + 1}. {element.taskname}
          <button
            onClick={() => completeTask(element.id)}
            disabled={element.completed}
          >
            {element.completed ? "done" : "complete"}
          </button>
          <button onClick={() => handleButtonClick(element.id)}>x</button>
        </p>
      ))}
    </div>
  );
};

export default App;

import React, { useState } from "react";
import "./App.css";
import ToDoItem from "./components/ToDoItem";
import Form from "./components/Form";
import TabButton from "./components/TabButton";

function App() {
  const [tab, setTab] = useState("All");
  const tabNames = ["All", "Active", "Completed"];
  const [tasksList, setTasksList] = useState([]);
  const changeTabHandler = (tabName) => {
    setTab(tabName);
  };
  const getTaskHandler = (task) => {
    const tasksArray = [...tasksList, { taskText: task, isDone: false }];
    setTasksList(tasksArray);
  };
  const taskCompleteHandler = (checked, task) => {
    const index = tasksList.findIndex((taskItem) => taskItem.taskText === task);
    const tasksArray = [...tasksList];
    tasksArray[index].isDone = checked;
    setTasksList(tasksArray);
  };
  return (
    <div className="flex flex-col items-center my-6 min-h-screen">
      <h1 className="font-bold text-4xl text-gray1 font-raleway">#todo</h1>
      <div>
        <menu className="grid grid-cols-3 gap-28 mt-12 border-b border-gray2 px-14 text-center font-montserrat font-semibold text-gray1">
          {tabNames.map((name) => (
            <TabButton
              key={name}
              content={name}
              class={tab === name ? "active" : ""}
              onClick={() => changeTabHandler(name)}
            />
          ))}
        </menu>
        <div className="flex flex-col mt-4 font-montserrat">
          <Form getTask={getTaskHandler} />
          <ul className="flex flex-col gap-4 mt-7">
            {tasksList.length > 0 ? (
              tasksList.map((task, index) => (
                <ToDoItem
                  task={task.taskText}
                  key={index}
                  isDone={task.isDone}
                  completeHandler={taskCompleteHandler}
                />
              ))
            ) : (
              <p>No tasks</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

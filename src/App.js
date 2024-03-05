import React, { useState } from "react";
import "./App.css";
import TabButton from "./components/TabButton";
import AllTab from "./components/AllTab";
import ActiveTab from "./components/ActiveTab";
import CompleteTab from "./components/CompleteTab";

function App() {
  const [tab, setTab] = useState("All");
  const tabNames = ["All", "Active", "Completed"];
  const [tasksList, setTasksList] = useState([
    { taskText: "Practice Web Development", isDone: false },
    {
      taskText: "Python Inheritance Course",
      isDone: true,
    },
  ]);
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
  let tabContent;

  if (tab === "All") {
    tabContent = (
      <AllTab
        tasksList={tasksList}
        getTaskHandler={getTaskHandler}
        taskCompleteHandler={taskCompleteHandler}
      />
    );
  } else if (tab === "Active") {
    tabContent = (
      <ActiveTab getTaskHandler={getTaskHandler} activeTasks={tasksList} />
    );
  } else {
    tabContent = <CompleteTab completedTasks={tasksList} />;
  }

  return (
    <div className="flex flex-col items-center sm:justify-start justify-center my-6 min-h-screen">
      <h1 className="font-bold text-4xl text-gray1 font-raleway">#todo</h1>
      <div className="sm:mx-0 mx-5">
        <menu className="grid grid-cols-3 sm:gap-28 gap-6 mt-12 border-b border-gray2 sm:px-14 text-center font-montserrat font-semibold text-gray1">
          {tabNames.map((name) => (
            <TabButton
              key={name}
              content={name}
              class={tab === name ? "active" : ""}
              onClick={() => changeTabHandler(name)}
            />
          ))}
        </menu>
        <div className="flex flex-col mt-4 font-montserrat">{tabContent}</div>
      </div>
    </div>
  );
}

export default App;

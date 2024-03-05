import React from "react";
import Form from "./Form";
import ToDoItem from "./ToDoItem";

const ActiveTab = ({ activeTasks, getTaskHandler }) => {
  return (
    <React.Fragment>
      <Form getTask={getTaskHandler} />
      <ul className="flex flex-col gap-4 mt-6">
        {activeTasks ? (
          activeTasks.map((activeTask, index) => (
            <ToDoItem
              task={activeTask.taskText}
              key={index}
              isDone={activeTask.isDone}
            />
          ))
        ) : (
          <p className="mt-6">No active tasks</p>
        )}
      </ul>
    </React.Fragment>
  );
};

export default ActiveTab;

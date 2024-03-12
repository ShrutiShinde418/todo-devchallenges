import React from "react";
import Form from "./Form";
import ToDoItem from "./ToDoItem";
import { useSelector } from "react-redux";

const ActiveTab = () => {
  const tasks = useSelector((state) => state.tasks.tasksList);
  const activeTasks = tasks.filter((task) => !task.isDone);
  return (
    <React.Fragment>
      <Form />
      <ul className="flex flex-col gap-4 mt-6">
        {activeTasks.length > 0 ? (
          activeTasks.map((activeTask) => (
            <ToDoItem
              task={activeTask.taskText}
              key={activeTask.id}
              id={activeTask.id}
              isDone={activeTask.isDone}
            />
          ))
        ) : (
          <p>No active tasks</p>
        )}
      </ul>
    </React.Fragment>
  );
};

export default ActiveTab;

import React from "react";
import Form from "./Form";
import ToDoItem from "./ToDoItem";
import { useSelector } from "react-redux";

const AllTab = () => {
  const taskState = useSelector((state) => state.tasks.tasksList);
  return (
    <React.Fragment>
      <Form />
      <ul className="flex flex-col gap-4 mt-6">
        {taskState.length > 0 ? (
          taskState.map((task) => (
            <ToDoItem
              task={task.taskText}
              key={task.id}
              id={task.id}
              isDone={task.isDone}
            />
          ))
        ) : (
          <p>No tasks</p>
        )}
      </ul>
    </React.Fragment>
  );
};

export default AllTab;

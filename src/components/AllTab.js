import React from "react";
import Form from "./Form";
import ToDoItem from "./ToDoItem";

const AllTab = ({ tasksList, getTaskHandler, taskCompleteHandler }) => {
  return (
    <React.Fragment>
      <Form getTask={getTaskHandler} />
      <ul className="flex flex-col gap-4 mt-6">
        {tasksList ? (
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
    </React.Fragment>
  );
};

export default AllTab;

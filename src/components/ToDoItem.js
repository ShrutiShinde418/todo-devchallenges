import React from "react";

const ToDoItem = (props) => {
  const taskDoneHandler = (e) => {
    props.completeHandler(e.target.checked, props.task);
  };
  return (
    <li className="flex items-center gap-2">
      <input
        type="checkbox"
        name="task"
        id="task"
        className="w-5 h-5 accent-blue"
        checked={props.isDone}
        onChange={taskDoneHandler}
      />
      <p
        className={
          props.isDone
            ? "text-black font-medium line-through"
            : "text-black font-medium"
        }
      >
        {props.task}
      </p>
    </li>
  );
};

export default ToDoItem;

import React from "react";

const ToDoItem = ({ task, isDone, completeHandler }) => {
  const taskDoneHandler = (e) => {
    completeHandler(e.target.checked, task);
  };
  return (
    <li className="flex items-center gap-2">
      <input
        type="checkbox"
        name="task"
        id="task"
        className="w-5 h-5 accent-blue"
        checked={isDone}
        onChange={taskDoneHandler}
      />
      <p
        className={
          isDone
            ? "text-black font-medium line-through"
            : "text-black font-medium"
        }
      >
        {task}
      </p>
    </li>
  );
};

export default ToDoItem;

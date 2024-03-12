import React from "react";
import { useDispatch } from "react-redux";
import taskSlice from "../store/taskSlice";

const ToDoItem = ({ task, isDone, id }) => {
  const { toggleTaskHandler } = taskSlice.actions;
  const dispatch = useDispatch();
  const taskDoneHandler = (e, key) => {
    dispatch(toggleTaskHandler({ checked: e.target.checked, id: id }));
  };
  return (
    <li className="flex items-center gap-2" key={id}>
      <input
        type="checkbox"
        name="task"
        id="task"
        className="w-5 h-5 accent-blue"
        checked={isDone}
        onChange={(e) => taskDoneHandler(e, id)}
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

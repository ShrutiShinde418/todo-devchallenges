import React, { useState } from "react";
import { useDispatch } from "react-redux";
import taskSlice from "../store/taskSlice";

const Form = () => {
  const dispatch = useDispatch();
  const { addTaskHandler } = taskSlice.actions;
  const [task, setTask] = useState("");
  const textChangeHandler = (e) => {
    setTask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ isDone: false, id: getID(), taskText: task });
    dispatch(addTaskHandler({ isDone: false, id: getID(), taskText: task }));
    setTask("");
  };

  const getID = () => {
    return Date.now().toString(36);
  };

  return (
    <form
      className="flex justify-between gap-5 text-sm"
      onSubmit={submitHandler}
    >
      <input
        placeholder="add details"
        name="add"
        id="add"
        className="border border-gray3 px-3 py-3 rounded-lg w-full"
        onChange={textChangeHandler}
        value={task}
        required
      />
      <button className="text-white bg-blue px-8 py-3 rounded-xl font-semibold">
        Add
      </button>
    </form>
  );
};

export default Form;

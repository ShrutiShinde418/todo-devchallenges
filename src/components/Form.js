import React, { useState } from "react";

const Form = (props) => {
  const [task, setTask] = useState("");
  const textChangeHandler = (e) => {
    setTask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.getTask(task);
    setTask("");
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

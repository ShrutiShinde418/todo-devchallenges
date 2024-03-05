import React from "react";
import ToDoItem from "./ToDoItem";

const CompleteTab = ({ completedTasks }) => {
  console.log(completedTasks);
  const removeTaskHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.target);
  };
  return (
    <React.Fragment>
      {completedTasks ? (
        completedTasks.map((activeTask, index) => (
          <form className="flex flex-col mb-2" key={index}>
            <ul className="flex w-full justify-between items-center">
              <ToDoItem task={activeTask.taskText} isDone={activeTask.isDone} />
              <button
                className="items-end"
                onClick={(e) => removeTaskHandler(e)}
                type="submit"
              >
                <span className="material-symbols-outlined text-gray2">
                  delete
                </span>
              </button>
            </ul>
          </form>
        ))
      ) : (
        <p>No Completed tasks</p>
      )}
      <button className="bg-red px-6 py-3 text-white font-semibold rounded self-end flex items-center gap-2 mt-8">
        <span className="material-symbols-outlined text-base">delete</span>
        <p className="text-sm">delete all</p>
      </button>
    </React.Fragment>
  );
};

export default CompleteTab;

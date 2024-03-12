import React from "react";
import ToDoItem from "./ToDoItem";
import { useDispatch, useSelector } from "react-redux";
import taskSlice from "../store/taskSlice";

const CompleteTab = () => {
  const { clearTasksHandler, deleteTaskHandler } = taskSlice.actions;
  const tasks = useSelector((state) => state.tasks.tasksList);
  const completedTasks = tasks.filter((task) => task.isDone);
  const dispatch = useDispatch();
  const removeTaskHandler = (e, id) => {
    e.preventDefault();
    dispatch(deleteTaskHandler());
  };
  return (
    <React.Fragment>
      {completedTasks.length > 0 ? (
        completedTasks.map((activeTask) => (
          <form className="flex flex-col mb-2" key={activeTask.id}>
            <ul className="flex w-full justify-between items-center">
              <ToDoItem
                task={activeTask.taskText}
                isDone={activeTask.isDone}
                id={activeTask.id}
              />
              <button
                className="items-end"
                onClick={(e) => removeTaskHandler(e, activeTask.id)}
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
      <button
        className="bg-red px-6 py-3 text-white font-semibold rounded self-end flex items-center gap-2 mt-8"
        onClick={() => dispatch(clearTasksHandler())}
      >
        <span className="material-symbols-outlined text-base">delete</span>
        <p className="text-sm">delete all</p>
      </button>
    </React.Fragment>
  );
};

export default CompleteTab;

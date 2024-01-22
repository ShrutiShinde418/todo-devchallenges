import React from "react";
import ToDoItem from "./ToDoItem";

const CompleteTab = ({ completedTasks }) => {
  return (
    <React.Fragment>
      {completedTasks ? (
        completedTasks.map((activeTask, index) => (
          <div>
            <ToDoItem
              task={activeTask.taskText}
              key={index}
              isDone={activeTask.isDone}
            />
            <button className="items-end">
              <span class="material-symbols-outlined text-gray2">delete</span>
            </button>
          </div>
        ))
      ) : (
        <p>No Completed tasks</p>
      )}
      <button>delete all</button>
    </React.Fragment>
  );
};

export default CompleteTab;

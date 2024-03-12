import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasksList: [],
  },
  reducers: {
    addTaskHandler: (state, action) => {
      state.tasksList = [...state.tasksList, { ...action.payload }];
    },
    toggleTaskHandler: (state, action) => {
      const index = state.tasksList.findIndex(
        (taskItem) => taskItem.id === action.payload.id
      );
      state.tasksList[index].isDone = action.payload.checked;
    },
    deleteTaskHandler: (state, action) => {
      const index = state.tasksList.findIndex(
        (taskItem) => taskItem.id === action.payload.id
      );
      state.tasksList.splice(index, 1);
    },
    clearTasksHandler: (state) => {
      state.tasksList = state.tasksList.filter((task) => !task.isDone);
    },
  },
});

export default taskSlice;

import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasksList: [
      {
        taskText: "Practice Web Development",
        isDone: false,
        id: "sfjansd",
      },
      {
        taskText: "Python Inheritance Course",
        isDone: true,
        id: "dnvasklv",
      },
    ],
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
        (taskItem) => taskItem.taskText === action.payload
      );
      state.tasksList.splice(index, 1);
    },
  },
});

export default taskSlice;

import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./taskSlice";
import tabSlice from "./tabSlice";

const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
    tabs: tabSlice.reducer,
  },
});

export default store;

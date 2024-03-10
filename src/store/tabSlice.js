import { createSlice } from "@reduxjs/toolkit";

const tabSlice = createSlice({
  name: "tabs",
  initialState: "All",
  reducers: {
    setTab: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export default tabSlice;

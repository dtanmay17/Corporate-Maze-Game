import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Guest",
  level: 1,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    levelUp: (state) => {
      state.level += 1;
    },
  },
});

export const { setName, levelUp } = playerSlice.actions;
export default playerSlice.reducer;

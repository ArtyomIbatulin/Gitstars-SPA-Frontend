import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  repos: [],
  name: "",
  idRepo: "",
};
const repoSlice = createSlice({
  name: "repo",
  initialState,
  reducers: {
    changeState: (state, action) => {
      state.repos = action.payload;
    },
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeId: (state, action) => {
      state.idRepo = action.payload;
    },
  },
});

export const { changeState, changeName, changeId } = repoSlice.actions;
export default repoSlice.reducer;

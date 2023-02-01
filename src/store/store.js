import { configureStore } from "@reduxjs/toolkit";
import repoSlice from "./repoSlice";

const store = configureStore({
  reducer: {
    repo: repoSlice,
  },
});

export default store;

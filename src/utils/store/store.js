import { configureStore } from "@reduxjs/toolkit";
import LayoutSlice from "./LayoutSlice";

const store = configureStore({
  reducer: {
    layout: LayoutSlice,
  },
});

export default store;

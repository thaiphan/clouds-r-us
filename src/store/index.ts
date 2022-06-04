import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
});

export default store;

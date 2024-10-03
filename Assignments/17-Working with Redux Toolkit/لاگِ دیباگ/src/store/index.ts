import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import alertMiddleware from "./middleware";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(alertMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type RootStore = typeof store;
export type AppDispatch = typeof store.dispatch;

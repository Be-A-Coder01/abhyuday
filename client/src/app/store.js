import { configureStore } from "@reduxjs/toolkit";
import event from "../features/getEvents";

export const store = configureStore({
  reducer: {
    eventName: event,
  },
});

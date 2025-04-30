import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentEvent: "adesh",
};

export const getEvents = createSlice({
  name: "currentEventSlice",
  initialState,
  reducers: {
    updateEvent: (state, action) => {
      state.currentEvent = action.payload;
    },
  },
});

export const { updateEvent } = getEvents.actions;
export default getEvents.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_MESSAGES } from "./constants";

const initialState = INITIAL_MESSAGES;

const slice = createSlice({
  name: "@@messages",
  initialState: initialState,
  reducers: {
    addMessage: (state, action) => {
      if (action.payload.trim() === "") return;
      return [...state, {text: action.payload, isCurrentUser: true}];
    },
    addReply: (state, action) => {
      return [...state, action.payload];
    }
  }
})

export const reducer = slice.reducer;
export const { addMessage, addReply } = slice.actions;

export const selectAllMessages = (state) => state.messages;
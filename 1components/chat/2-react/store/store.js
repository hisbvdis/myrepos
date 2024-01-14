import { configureStore } from "@reduxjs/toolkit";

import { reducer as messages } from "../components/Main/main.slice";

export const store = configureStore({
  reducer: { messages }
})
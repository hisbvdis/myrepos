import { configureStore } from "@reduxjs/toolkit";

import { reducer as users } from "./features/Users/users.slice";

export const store = configureStore({
  reducer: { users },
  devTools: true,
})
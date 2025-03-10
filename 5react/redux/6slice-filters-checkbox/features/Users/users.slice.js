import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {id: 0, name: "Roma", isAdmin: true, isBanned: false},
    {id: 1, name: "Vasya", isAdmin: false, isBanned: true},
    {id: 2, name: "Petya", isAdmin: true, isBanned: true},
  ],
  searchQuery: "",
  searchFilters: [],
  filters: []
}

const slice = createSlice({
  name: "@@users",
  initialState,
  reducers: {
    addUser: {
      prepare: (name) => ({
        payload: {
          id: nanoid(),
          name,
          isAdmin: false,
          isBanned: false,
        }
      }),
      reducer: (state, action) => {
        return {
          ...state,
          list: state.list.concat(action.payload),
        };
      }
    },

    removeUser: (state, action) => {
      return {
        ...state,
        list: state.list.filter(user => user.id !== action.payload),
      }
    },

    changeUser: (state, action) => {
      return {
        ...state,
        list: state.list.map((user) =>
          user.id === action.payload.id
            ? { ...user, [action.payload.field]: action.payload.value }
            : user
        ),
      };
    },

    setSearchQuery: (state, action) => {
      return { ...state, searchQuery: action.payload };
    },
    
    addFilter: (state, action) => {
      return {
        ...state,
        filters: state.filters.concat(action.payload)
      }
    },

    removeFilter: (state, action) => {
      return {
        ...state,
        filters: state.filters.filter(filter => filter !== action.payload)
      }
    },
  }
})

// Export
export const reducer = slice.reducer;
export const {
  addUser,
  removeUser,
  changeUser,
  setSearchQuery,
  addFilter,
  removeFilter,
} = slice.actions;

// Selectors
export const selectAllUsers = (state) => state.users.list;
export const selectSearchQuery = (state) => state.users.searchQuery;
export const selectFilters = (state) => state.users.filters;
export const selectFilteredUsers = (state) => state.users.list
  .filter((user) => {
    const searchQuery = state.users.searchQuery.toLowerCase();
    const userName = user.name.toLowerCase();
    if (userName.includes(searchQuery)) return user;
  })
  .filter((user) => {
    if (!state.users.filters.includes("isAdmin")) return user;
    if (user.isAdmin === true) return user;
  })
  .filter((user) => {
    if (!state.users.filters.includes("isBanned")) return user;
    if (user.isBanned === true) return user;
  })
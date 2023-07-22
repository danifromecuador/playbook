import { createSlice } from "@reduxjs/toolkit";
import array from './array';
import { fetchUser } from "../../services/bookStoreAPI";

const initialState = {
  array: array,
  isLoading: false,
  error: undefined,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase("users/fetchUser/pending", (state, action) => {
        state.isLoading = true;
      })
      .addCase("users/fetchUser/fulfilled", (state, action) => {
        state.isLoading = false;
        state.array = action.payload;
      })
      .addCase("users/fetchUser/rejected", (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { fetchArray } from "../../services/bookStoreAPI";

const initialState = {
  array: [],
  isLoading: false,
  error: undefined,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArray.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchArray.fulfilled, (state, action) => {
        state.isLoading = false;
        state.array = action.payload;
      })
      .addCase(fetchArray.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default booksSlice.reducer;

// Path: src/redux/books/booksSlice.js
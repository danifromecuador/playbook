import { createSlice } from "@reduxjs/toolkit";
import bookStoreAPI from "../../services/bookStoreAPI"; // Import the bookStoreAPI object that contains the getBooks async thunk.

const initialState = {
  array: [],
  isLoading: false,
  error: undefined,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(bookStoreAPI.getBooks.pending, (state) => {
  //       state.isLoading = true;
  //       state.error = undefined;
  //     })
  //     .addCase(bookStoreAPI.getBooks.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.array = action.payload;
  //       state.error = undefined;
  //     })
  //     .addCase(bookStoreAPI.getBooks.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     });
  // },
});

export default booksSlice.reducer;

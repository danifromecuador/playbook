import { configureStore } from "@reduxjs/toolkit";
import booksReduce from "./books/booksSlice";

export const store = configureStore({
  reducer: {
    books: booksReduce,
  },
});


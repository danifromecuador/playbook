import { configureStore } from "@reduxjs/toolkit";
import booksReduce from "./books/booksSlice";
import categoriesReduce from "./categories/categoriesSlice";

export const store = configureStore({
  reducer: {
    books: booksReduce,
    categories: categoriesReduce,
  },
});


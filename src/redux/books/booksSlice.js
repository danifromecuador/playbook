import { createSlice } from "@reduxjs/toolkit";
import array from './array';

const initialState = {
  array: array,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state = initialState, action) => {
      const newBook = {
        item_id: `item${state.array.length + 1}`,
        title: action.payload.title,
        author: action.payload.author,
        category: "unknown",
      };
      return {
        ...state,
        array: [...state.array, newBook],
      };
    },

    removeBook: (state = initialState, action) => {
      const newArray = [...state.array];
      newArray.splice(action.payload.index, 1);
      return {
        ...state,
        array: newArray,
      };
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;

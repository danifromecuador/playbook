import { createSlice } from "@reduxjs/toolkit";
import array from './array'

const initialState = {
  array: array,
}

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state = initialState, action) => {
      const newBook = {
        item_id: `item${state.array.length + 1}`,
        title: action.payload.title,
        author: action.payload.author,
        category: "unknown"
      };
      return {
        ...state,
        array: [...state.array, newBook],
      }
    }
  }
})

export const { addBook } = booksSlice.actions
export default booksSlice.reducer
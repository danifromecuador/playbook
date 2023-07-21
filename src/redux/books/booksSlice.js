import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  array:
    [
      {
        "item_id": "item1",
        "title": "The Great Gatsby",
        "author": "John Smith",
        "category": "Fiction"
      },
      {
        "item_id": "item2",
        "title": "Anna Karenina",
        "author": "Leo Tolstoy",
        "category": "Fiction"
      }
    ],
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
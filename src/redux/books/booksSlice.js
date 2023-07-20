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
      },
      {
        "item_id": "item3",
        "title": "The Selfish Gene",
        "author": "Richard Dawkins",
        "category": "Nonfiction"
      }
    ],
}

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.array.push(action.payload)
      return console.log(state.array)
    },
    removeBook: (state, action) => {
      state.array = state.array.filter((book) => book.id !== action.payload)
    }
  }
})

export const { addBook } = booksSlice.actions
export default booksSlice.reducer
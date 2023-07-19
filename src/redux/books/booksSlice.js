import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  array: [],
}

const booksSlice = createSlice({


  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.array.push(action.payload)
    }
  }
})

export const { addBook } = booksSlice.actions
export default booksSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  array: [], 
}

const booksSlice = createSlice({
  name: "books",
  initialState,
})

export default booksSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  array: [],
}

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    checkStatus: () => {
      return "under construction"
    }
  }
})

export const { checkStatus } = categoriesSlice.actions
export default categoriesSlice.reducer
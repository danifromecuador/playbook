import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserAsync = async () => {
  try {
    const response = await fetch ("https://randomuser.me/api/?results=5");
    const data = await response.json();
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUser = createAsyncThunk("users/fetchUser", fetchUserAsync);


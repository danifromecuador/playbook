import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const apiID = "bGRMoVcg6JSZDPv8vrLC";
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/';

const getBooks = createAsyncThunk("books/getBooks", async (thunkAPI) => {
  try {
    const response = await axios.get(`${baseURL}apps/${apiID}/books`);
    console.log(response.data);
    return [{index: "0", title: "No books found", category: "No books found", author: "juan perez"},];
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export function booksToArray() {
  const array = getBooks();
  return array;
};

export function addBook() {
  console.log('addBook');
}

const bookStoreAPI = {
  getBooks,
  addBook,
  booksToArray
};

export default bookStoreAPI;

// Path: src/services/bookStoreAPI.js
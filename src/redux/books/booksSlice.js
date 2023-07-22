import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const URL =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AZWwdB6xdu3Biv6ZvG64/books/';

export const getBooksFromServer = createAsyncThunk('books/getBooks', async () => {
  const formatApiResponse = (response) => {
    const formattedData = Object.keys(response).map((key) => {
      return {
        item_id: key,
        ...response[key][0],
      };
    });
    return formattedData;
  };

  const response = await axios.get(URL);
  const formatResp = formatApiResponse(response.data);
  console.log(formatResp);
  return formatResp;
});

export const addBookToServer = createAsyncThunk('books/addBook', async (bookData) => {
  const response = await axios.post(URL, bookData);
  return response.data;
});

export const removeBookFromServer = createAsyncThunk('bookshelf/removeBook', async (bookId) => {
  const response = await axios.delete(`${URL}${bookId}`);
  return response.data;
});

const initialState = {
  books: [],
  status: null,
  error: null,
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
      for (let i = 0; i < newArray.length; i++) {
        newArray[i] = {
          ...newArray[i],
          item_id: `item${i + 1}`,
        };
      }
      return {
        ...state,
        array: newArray,
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getBooksFromServer.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBooksFromServer.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(getBooksFromServer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;

// Path: src/redux/books/booksSlice.js
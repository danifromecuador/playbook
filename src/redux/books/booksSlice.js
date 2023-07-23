import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const URL =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/bGRMoVcg6JSZDPv8vrLC/books/';

  let array = [];

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
  console.log(formatResp)
  return formatResp;
});

export const addBookToServer = createAsyncThunk('books/addBook', async (bookData) => {
  const response = await axios.post(URL, bookData);
  return response.data;
});

export const removeBookFromServer = createAsyncThunk('bookshelf/removeBook', async (item_id) => {
  await axios.delete(`${URL}${item_id}`);
  array = getBooksFromServer();
  array.forEach((book, index) => {
    book.item_id = `item${index}`;
  });
  return array;
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
        item_id: `item${state.books.length + 1}`,
        title: action.payload.title,
        author: action.payload.author,
        category: "unknown",
      };
      return {
        ...state,
        books: [...state.books, newBook],
      };
    },

    removeBook: (state = initialState, action) => {
      const newArray = [...state.books];
      console.log(action.payload)
      newArray.splice(action.payload, 1);
      
      return {
        ...state,
        books: newArray,
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

export default booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
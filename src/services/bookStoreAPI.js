import { createAsyncThunk } from "@reduxjs/toolkit";

const obtainArrayFromAPI = async () => {
  const apiID = "bGRMoVcg6JSZDPv8vrLC";
  const baseURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiID}/books`;

  try {
    const response = await fetch(baseURL);

    if (!response.ok) {
      throw new Error("Failed to fetch data from the API");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching data from the API");
  }
};

export const fetchArray = createAsyncThunk("users/fetchArray", obtainArrayFromAPI);


// Path: src/services/bookStoreAPI.js
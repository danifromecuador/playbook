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
    // console.log(data); ins't workign
    return data;
  } catch (error) {
    throw new Error("Error fetching data from the API");
  }
};

export const fetchUsers = createAsyncThunk("users/fetchUser", obtainArrayFromAPI);


// Path: src/services/bookStoreAPI.js
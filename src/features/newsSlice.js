import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const response = await axios.get('https://newsapi.org/v2/everything?q=apple&from=2024-12-26&to=2024-12-26&sortBy=popularity&apiKey=f4eb1f71c5a44b19b4b2d4becfcd9c14');
  return response.data.articles;
});

const newsSlice = createSlice({
  name: 'news',
  initialState: { articles: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
        state.error = null; 
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
        state.error = null;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message; 
      });
  },
});

export default newsSlice.reducer;

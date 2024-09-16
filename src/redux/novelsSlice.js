import { createSlice } from '@reduxjs/toolkit';

const novelsSlice = createSlice({
  name: 'novels',
  initialState: {
    featured: [],
    genres: [],
  },
  reducers: {
    setFeaturedNovels: (state, action) => {
      state.featured = action.payload;
    },
    setGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const { setFeaturedNovels, setGenres } = novelsSlice.actions;

export default novelsSlice.reducer;

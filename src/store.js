import { createSlice, configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const mainTilesSlice = createSlice({
  name: 'mainTiles',
  initialState: [],
  reducers: {
    fetchTiles: (state, action) => {
      state.push(...action.payload);
    },
  },
});

export const { fetchTiles } = mainTilesSlice.actions;

export const loadTiles = () => {
  return async (dispatch) => {
    const response = await axios.get('/tiles');
    dispatch(fetchTiles(response.data));
  };
};

export const store = configureStore({
  reducer: {
    mainTiles: mainTilesSlice.reducer,
  },
  middleware: [thunk, createLogger({ collapsed: false })],
});

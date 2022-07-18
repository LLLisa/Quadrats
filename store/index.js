import { createSlice, configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const tilesSlice = createSlice({
  name: 'tiles',
  initialState: [],
  reducers: {
    setTiles: (state, action) => {
      return action.payload;
    },
  },
});

export const { setTiles } = tilesSlice.actions;

export const loadTiles = () => {
  return async (dispatch) => {
    const response = await axios.get('/tiles');
    dispatch(setTiles(response.data.sort((a, b) => a.id - b.id)));
  };
};

export const swapTiles = (tile1, tile2) => {
  return async () => {
    await axios.put('/swap', { tile1, tile2 });
  };
};

export const randomizeSwaps = () => {
  return async () => {
    await axios.get('/randomize');
    const response = await axios.get('/tiles');
    dispatch(setTiles(response.data));
  };
};

export const store = configureStore({
  reducer: {
    tiles: tilesSlice.reducer,
  },
  middleware: [thunk, createLogger({ collapsed: true })],
});

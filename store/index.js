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

export const loadMainTiles = () => {
  return async (dispatch) => {
    const response = await axios.get('/mainTiles');
    dispatch(setTiles(response.data));
  };
};

export const randomizeSwaps = () => {
  return async () => {
    const response = await axios.get('/randomize');
    console.log(response.data);
  };
};

export const store = configureStore({
  reducer: {
    tiles: tilesSlice.reducer,
  },
  middleware: [thunk, createLogger({ collapsed: false })],
});

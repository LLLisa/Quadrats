import { createSlice, configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const mainTilesSlice = createSlice({
  name: 'mainTiles',
  initialState: [],
  reducers: {
    setMainTiles: (state, action) => {
      return action.payload;
    },
  },
});

const swapTilesSlice = createSlice({
  name: 'mainTiles',
  initialState: [],
  reducers: {
    setSwapTiles: (state, action) => {
      return action.payload;
    },
  },
});

export const { setMainTiles } = mainTilesSlice.actions;
export const { setSwapTiles } = swapTilesSlice.actions;

export const loadMainTiles = () => {
  return async (dispatch) => {
    const response = await axios.get('/mainTiles');
    dispatch(setMainTiles(response.data));
  };
};

export const loadSwapTiles = () => {
  return async (dispatch) => {
    const response = await axios.get('/swapTiles');
    dispatch(setSwapTiles(response.data));
  };
};

export const store = configureStore({
  reducer: {
    mainTiles: mainTilesSlice.reducer,
    swapTiles: swapTilesSlice.reducer,
  },
  middleware: [thunk, createLogger({ collapsed: false })],
});

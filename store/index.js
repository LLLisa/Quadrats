import { createSlice, configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const mainTilesSlice = createSlice({
  name: 'mainTiles',
  initialState: [],
  reducers: {
    setTiles: (state, action) => {
      return action.payload;
    },
  },
});

export const { setTiles } = mainTilesSlice.actions;

export const loadTiles = () => {
  return async (dispatch) => {
    const response = await axios.get('/tiles');
    dispatch(setTiles(response.data));
  };
};

export const store = configureStore({
  reducer: {
    mainTiles: mainTilesSlice.reducer,
  },
  middleware: [thunk, createLogger({ collapsed: false })],
});

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '../store';
import Grid from './Grid';
import Header from './Header';
import Score from './Score';

const Root = () => {
  return (
    <div>
      <Header />
      <Grid />
      <Score />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Root />
  </Provider>
);

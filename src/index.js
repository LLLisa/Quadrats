import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '../store';
import Grid from './Grid';

class Root extends React.Component {
  render() {
    return (
      <div>
        <h1>Quadrats</h1>
        <Grid />
      </div>
    );
  }
}

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Root />
  </Provider>
);

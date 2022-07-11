import React from 'react';
import { createRoot } from 'react-dom/client';
import Grid from './Grid';
import Header from './Header';

const Root = () => {
  return (
    <div>
      <Header />
      <Grid />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));

root.render(<Root />);

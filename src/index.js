import React from 'react';
import { createRoot } from 'react-dom/client';

class Root extends React.Component {
  render() {
    return (
      <div>
        <h1>Quadrats</h1>
      </div>
    );
  }
}

const root = createRoot(document.getElementById('root'));

root.render(<Root />);

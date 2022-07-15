import React from 'react';

const Tile = ({ props }) => {
  const { alphanum, color, shape } = props;

  return (
    <div className='tile' style={{ backgroundColor: color }}>
      <div className='alphanum'>{alphanum}</div>{' '}
      <div
        className={
          shape === '\u25CB'
            ? 'shape circle'
            : shape === '\u25B3'
            ? 'shape triangle'
            : shape === '\u25A1'
            ? 'shape square'
            : 'shape'
        }
      >
        {shape}
      </div>
    </div>
  );
};

export default Tile;

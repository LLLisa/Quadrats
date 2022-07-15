import React from 'react';

const Tile = ({ props }) => {
  const { alphanum, color, shape } = props;

  //todo: border alphanum
  return (
    <div className='tile' style={{ backgroundColor: color }}>
      <div className='alphanum'>{alphanum}</div>{' '}
      <div
        className={
          shape === '\u25CB'
            ? 'shape circle'
            : shape === '\u25B3'
            ? 'shape triangle'
            : 'shape'
        }
      >
        {shape}
      </div>
    </div>
  );
};

export default Tile;

import React from 'react';

const Tile = ({ props }) => {
  const { alphanum, color, shape } = props;
  return (
    <div className='tile' style={{ backgroundColor: color }}>
      {alphanum}, {shape}
    </div>
  );
};

export default Tile;

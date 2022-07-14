import React from 'react';

const Tile = ({ props }) => {
  const { alphanum, color, shape } = props;
  return (
    <div>
      {alphanum}, {color}, <span>{shape}</span>
    </div>
  );
};

export default Tile;

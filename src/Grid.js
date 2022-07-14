import React from 'react';
import { useSelector } from 'react-redux';

const Grid = () => {
  const state = useSelector((state) => state);

  return (
    <div>
      grid
      {
        <ul>
          {state.mainTiles.map((tile) => {
            return (
              <li key={tile.id}>
                {tile.alphanum}, {tile.color}, {tile.shape}
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
};

export default Grid;

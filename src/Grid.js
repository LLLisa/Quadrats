import React from 'react';
import { useSelector } from 'react-redux';
import Tile from './Tile';

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
                <Tile props={tile} />
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
};

export default Grid;

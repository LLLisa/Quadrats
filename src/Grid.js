import React from 'react';
import { useSelector } from 'react-redux';
import Tile from './Tile';

const Grid = () => {
  const mainTiles = useSelector((state) => state.mainTiles);
  const radius = Math.sqrt(mainTiles.length);

  return (
    <div>
      grid
      {
        <ul>
          {mainTiles.map((tile) => {
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

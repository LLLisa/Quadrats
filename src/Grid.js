import React from 'react';
import { useSelector } from 'react-redux';
import Tile from './Tile';

const Grid = () => {
  const mainTiles = useSelector((state) => state.mainTiles);
  const radius = Math.sqrt(mainTiles.length);
  const rows = genRows(mainTiles);

  function genRows(array) {
    let tiles = array.slice();
    const result = [];
    for (let i = 0; i < radius; i++) {
      const row = [];
      for (let j = 0; j < radius; j++) {
        //should be pop() for performance
        row.push(tiles.pop());
      }
      result.push(row);
    }
    return result;
  }

  return (
    <div>
      grid
      <table>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((tile, j) => (
                <td key={j}>
                  {<Tile props={tile} />}
                  {i},{j}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Grid;

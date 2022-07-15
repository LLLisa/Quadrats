import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Tile from './Tile';

const Grid = () => {
  const mainTiles = useSelector((state) => state.mainTiles);
  const radius = Math.sqrt(mainTiles.length);
  //   const rows = genRows(mainTiles);
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    setGrid(genRows(mainTiles));
  }, [mainTiles.length]);

  function genRows(array) {
    let tiles = array.slice();
    const result = [];
    for (let i = 0; i < radius; i++) {
      const row = [];
      for (let j = 0; j < radius; j++) {
        row.push(tiles.pop());
      }
      result.push(row);
    }
    return result;
  }

  function handleSwitch() {
    const swapGrid = grid.slice();
    [swapGrid[0][0], swapGrid[0][1]] = [swapGrid[0][1], swapGrid[0][0]];
    setGrid(swapGrid);
  }

  return (
    <div>
      grid
      <button onClick={handleSwitch}>switch</button>
      <table>
        <tbody>
          {grid.map((row, i) => (
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

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Tile from './Tile';

const Grid = () => {
  const mainTiles = useSelector((state) => state.mainTiles);
  const radius = Math.sqrt(mainTiles.length);
  const [grid, setGrid] = useState([]);
  const [firstPick, setFirstPick] = useState([]);

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

  function handleSwitch([x1, y1], [x2, y2]) {
    [grid[x1][y1], grid[x2][y2]] = [grid[x2][y2], grid[x1][y1]];
    setGrid([...grid]);
  }

  function handlePick(i, j) {
    if (!firstPick.length) {
      setFirstPick([i, j]);
    } else {
      handleSwitch(firstPick, [i, j]);
      setFirstPick([]);
    }
  }

  return (
    <div>
      grid
      <button onClick={() => console.log(grid[0])}>switch</button>
      <table>
        <tbody>
          {grid.map((row, i) => (
            <tr key={i}>
              {row.map((tile, j) => (
                <td key={j} onClick={() => handlePick(i, j)}>
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

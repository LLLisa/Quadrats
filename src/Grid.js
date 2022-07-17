import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMainTiles } from '../store';
import Tile from './Tile';

const Grid = () => {
  const mainTiles = useSelector((state) => state.mainTiles);
  const swapTiles = useSelector((state) => state.swapTiles);
  const radius = Math.sqrt(mainTiles.length);
  const [grid, setGrid] = useState([]);
  const [pool, setPool] = useState([]);
  const [firstPick, setFirstPick] = useState([]);
  const [swap, setSwap] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setGrid(genRows(mainTiles, radius, radius));
    if (swapTiles.length) setPool(genRows(swapTiles, 8, 2));
  }, [swapTiles.length]);

  function genRows(array, columns, rows) {
    let tiles = array.slice();
    const result = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        //pop() for better performance
        row.push(tiles.shift());
      }
      result.push(row);
    }
    return result;
  }

  function handleSwitch(tile1, tile2) {
    const [x1, y1] = tile1[1];
    const [x2, y2] = tile2[1];
    [grid[x1][y1], grid[x2][y2]] = [tile2[0], tile1[0]];
    setGrid([...grid]);
    dispatch(setMainTiles(grid.flat()));
  }

  function handlePick(tile) {
    if (!firstPick.length) {
      setFirstPick(tile);
    } else {
      handleSwitch(firstPick, tile);
      setFirstPick([]);
    }
  }

  //   function handleSwap([tile, [i, j]]) {}

  return (
    <div>
      grid
      <table>
        <tbody>
          {grid.map((row, i) => (
            <tr key={i}>
              {row.map((tile, j) => (
                <td key={j} onClick={() => handlePick([tile, [i, j]])}>
                  {<Tile props={tile} />}
                  {/* {i},{j} */}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      swap tiles
      {pool[0] ? (
        <table>
          <tbody>
            {pool.map((row, i) => (
              <tr key={i}>
                {row.map((tile, j) => (
                  <td key={j} onClick={() => handlePick([tile, [i, j]])}>
                    {<Tile props={tile} />}
                    {/* {i},{j} */}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>''</div>
      )}
    </div>
  );
};

export default Grid;

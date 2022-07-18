import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMainTiles, randomizeSwaps, loadMainTiles } from '../store';
import Tile from './Tile';

const Grid = () => {
  const mainTiles = useSelector((state) => state.mainTiles);
  const swapTiles = useSelector((state) => state.swapTiles);
  // const radius = Math.sqrt(mainTiles.length);
  const [grid, setGrid] = useState([]);
  const [pool, setPool] = useState([]);
  const [firstPick, setFirstPick] = useState([]);
  const [swap, setSwap] = useState([]);
  const [mainGrid, setMainGrid] = useState([]);
  const [swapGrid, setSwapGrid] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (mainTiles.length) {
      setGrid(genRows(mainTiles, 8, 10));
      // setPool(genRows(mainTiles.slice(64), 8, 2));
    }
    // if (swapTiles.length) setPool(genRows(swapTiles, 8, 2));
  }, [mainTiles.length]);

  useEffect(() => {
    setMainGrid(grid.slice(0, 8));
    setSwapGrid(grid.slice(8));
  }, [grid]);

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
    [grid[x1][y1], grid[x2][y2]] = [grid[x2][y2], grid[x1][y1]];
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

  function handleRandomize() {
    dispatch(randomizeSwaps());
    window.location.reload();
  }

  return (
    <div>
      grid
      {/* {console.log(mainGrid, swapGrid)} */}
      <table>
        <tbody>
          {grid.slice(0, 8).map((row, i) => (
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
      swap tiles <button onClick={handleRandomize}>randomize</button>
      <table>
        <tbody>
          {grid.slice(8).map((row, i) => (
            <tr key={i}>
              {row.map((tile, j) => (
                <td key={j} onClick={() => handlePick([tile, [i + 8, j]])}>
                  {<Tile props={tile} />}
                  {/* {i + 8},{j} */}
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

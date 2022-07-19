import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTiles, swapTiles, randomizeSwaps, loadTiles } from '../store';
import Tile from './Tile';

const Grid = () => {
  const tiles = useSelector((state) => state.tiles);
  const [grid, setGrid] = useState([]);
  const [firstPick, setFirstPick] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (tiles.length) {
      setGrid(genRows(tiles, 8, 10));
    }
  }, [tiles]);

  function genRows(InputArray, columns, rows) {
    let array = InputArray.slice();
    const result = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        //pop() for better performance
        row.push(array.shift());
      }
      result.push(row);
    }
    return result;
  }

  async function handleSwitch(tile1, tile2) {
    if (tile1[0] !== tile2[0]) {
      const tile1Index = tiles.indexOf(tile1[0]);
      const tile2Index = tiles.indexOf(tile2[0]);
      const [x1, y1] = tile1[1];
      const [x2, y2] = tile2[1];
      [grid[x1][y1], grid[x2][y2]] = [grid[x2][y2], grid[x1][y1]];
      await dispatch(
        swapTiles(
          { ...tile1[0], id: tile1Index + 1 },
          { ...tile2[0], id: tile2Index + 1 }
        )
      );
      setGrid([...grid]);
      dispatch(setTiles(grid.flat()));
    }
  }

  function handlePick(tile) {
    if (!firstPick.length) {
      setFirstPick(tile);
    } else {
      handleSwitch(firstPick, tile);
      setFirstPick([]);
    }
  }

  async function handleRandomize() {
    await dispatch(randomizeSwaps());
    dispatch(loadTiles());
    setGrid(genRows(tiles, 8, 10));
  }

  return (
    <div>
      grid
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

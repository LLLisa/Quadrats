import React from 'react';
import catgegories from './scoring';
import { useSelector } from 'react-redux';

const Score = () => {
  const mainTiles = useSelector((state) => state.tiles).slice(0, 64);

  const results = catgegories.reduce((result, current) => {
    return Array.isArray(current(mainTiles))
      ? result.concat(current(mainTiles))
      : result.push(current(mainTiles));
  }, []);

  return (
    <div>
      score
      {results.length ? (
        <div>
          <ul>
            {results.map((result, i) => (
              <li key={i}>
                {result[0]}: {result[1]} points
              </li>
            ))}
          </ul>
          total:{' '}
          {results.reduce((total, current) => {
            return total + current[1];
          }, 0)}{' '}
          points
        </div>
      ) : (
        <div>total: 0 points</div>
      )}
    </div>
  );
};

export default Score;

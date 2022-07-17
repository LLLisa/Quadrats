import React from 'react';
import { flags, prime, pi } from './scoring';
import { useSelector } from 'react-redux';

const Score = () => {
  const mainTiles = useSelector((state) => state.mainTiles);

  const catgegories = [flags, prime, pi];

  const results = catgegories.reduce((result, current) => {
    return Array.isArray(current(mainTiles))
      ? result.concat(current(mainTiles))
      : result.push(current(mainTiles));
  }, []);

  //results should be an array of arrays, each containing message[0] and points[1]
  //   console.log(results);

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
        ''
      )}
    </div>
  );
};

export default Score;

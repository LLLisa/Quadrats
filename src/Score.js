import React from 'react';
import { flags } from './scoring/flags';
import { useSelector } from 'react-redux';

const Score = () => {
  const mainTiles = useSelector((state) => state.mainTiles);

  const results = flags(mainTiles);

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

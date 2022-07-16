export const flags = (array) => {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    if (
      (i + 1) % 8 !== 0 &&
      (i + 2) % 8 !== 0 &&
      array[i].color === 'blue' &&
      array[i + 1]?.color === 'white' &&
      array[i + 2]?.color === 'red'
    ) {
      results.push(['Vive le France!', 100]);
    }
    if (
      (i + 1) % 8 !== 0 &&
      (i + 2) % 8 !== 0 &&
      array[i].color === 'green' &&
      array[i + 1]?.color === 'white' &&
      array[i + 2]?.color === 'red'
    ) {
      results.push(['Viva Italia!', 100]);
    }
  }
  return results;
};

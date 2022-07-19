import { onlyColors, rotateGrid } from './util';
import { capitalize } from 'inflection';

export const thinLine = (inputArray) => {
  const normal = onlyColors(inputArray.slice());
  const rotated = onlyColors(rotateGrid(inputArray.slice()));
  const array = normal.concat(rotated);
  const result = [];
  loop: for (let i = 0; i < array.length; i += 8) {
    for (let j = 0; j < 8; j++) {
      if (array[i] !== array[i + j]) continue loop;
    }
    result.push([`The Thin ${capitalize(array[i])} line`, 8000]);
  }
  return result;
};

export const oneString = (inputArray) => {
  const array = inputArray.slice();
  return array.reduce((output, current) => {
    return output + current.alphanum;
  }, '');
};

export const allNums = (inputArray) => {
  const array = inputArray.slice();
  return array
    .filter((tile) => '0123456789'.includes(tile.alphanum))
    .map((tile) => tile.alphanum * 1);
};

export const allLetters = (inputArray) => {
  const array = inputArray.slice();
  return array
    .filter((tile) => !'0123456789'.includes(tile.alphanum))
    .map((tile) => tile.alphanum);
};

export const onlyColors = (inputArray) => {
  const array = inputArray.slice();
  return array.map((tile) => tile.color);
};

export const rotateGrid = (inputArray) => {
  const array = inputArray.slice();
  const result = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < array.length; j += 8) {
      result.push(array[i + j]);
    }
  }
  return result;
};

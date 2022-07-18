export const allNums = (inputArray) => {
  const array = inputArray.slice();
  return array
    .filter((x) => '0123456789'.includes(x.alphanum))
    .map((x) => x.alphanum * 1);
};

export const allLetters = (inputArray) => {
  const array = inputArray.slice();
  return array
    .filter((x) => !'0123456789'.includes(x.alphanum))
    .map((x) => x.alphanum);
};

export const oneString = (inputArray) => {
  const array = inputArray.slice();
  return array.reduce((output, current) => {
    return output + current.alphanum;
  }, '');
};

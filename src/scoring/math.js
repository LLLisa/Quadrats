import { allNums, oneString } from './util';

export const prime = (inputArray) => {
  const array = inputArray.slice();
  const sum = array.length ? allNums(array).reduce((a, b) => a + b) : 0;
  for (let i = 2; i < sum; i++) {
    if (sum % i === 0) return [];
  }
  return [[`Prime Sum! (${sum})`, 100]];
};

export const pi = (inputArray) => {
  const array = inputArray.slice();
  if (oneString(array).includes('314')) return [['Pi!', 314]];
  return [];
};

export const nice = (inputArray) => {
  const array = inputArray.slice();
  if (oneString(array).includes('69')) return [['Nice!', 69]];
  return [];
};

export const dank = (inputArray) => {
  const array = inputArray.slice();
  if (oneString(array).includes('420')) return [['Dank!', 420]];
  return [];
};

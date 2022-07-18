import { allNums, oneString } from './util';

export const prime = (inputArray) => {
  const array = inputArray.slice();
  //   const sum = array.reduce((total, current) => {
  //     return '0123456789'.includes(current.alphanum)
  //       ? total + current.alphanum * 1
  //       : total;
  //   }, 0);
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

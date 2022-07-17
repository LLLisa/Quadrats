export const prime = (array) => {
  const sum = array.reduce((total, current) => {
    return '0123456789'.includes(current.alphanum)
      ? total + current.alphanum * 1
      : total;
  }, 0);
  for (let i = 2; i < sum; i++) {
    if (sum % i === 0) return [];
  }
  return [[`Prime Sum! (${sum})`, 100]];
};

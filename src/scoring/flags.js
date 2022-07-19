const flagMap = new Map([
  ['bluewhitered', ['Liberté, égalité, fraternité!', 1789]],
  ['greenwhitered', ['Il Canto degli Italiani!', 1945]],
  ['blackyellowred', ['Eendracht maakt macht!', 1830]],
  ['blueyellowred', ['لاتحاد، العمل، التقدم', 1958]],
  ['redyellowgreen', ['Travail, Justice, Solidarité!', 1958]],
  ['greenwhiteorange', ['Éire go Deo', 1921]],
  ['orangewhitegreen', ['Union, Discipline, Travail! ', 1960]],
  ['greenyellowred', ['Un peuple, un but, une foi!', 1960]],
  ['blueyellowred', ['Deșteaptă-te, române!', 1989]],
]);

export const flags = (inputArray) => {
  const array = inputArray.slice();
  const results = [];
  for (let i = 0; i < array.length; i++) {
    if ((i + 1) % 8 && (i + 2) % 8) {
      const current = array[i].color + array[i + 1].color + array[i + 2].color;
      if (flagMap.has(current)) results.push(flagMap.get(current));
    }
  }
  return results.length ? results : [];
};

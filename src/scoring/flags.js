const flagMap = new Map();

flagMap
  .set('bluewhitered', ['Liberté, égalité, fraternité!', 1789])
  .set('greenwhitered', ['Il Canto degli Italiani!', 1945])
  .set('blackyellowred', ['Eendracht maakt macht!', 1830])
  .set('blueyellowred', ['لاتحاد، العمل، التقدم', 1958])
  .set('redyellowgreen', ['Travail, Justice, Solidarité', 1958])
  .set('greenwhiteorange', ['Éire go Deo', 1921])
  .set('orangewhitegreen', ['Union, Discipline, Travail ', 1960])
  .set('greenyellowred', ['Un peuple, un but, une foi', 1960])
  .set('blueyellowred', ['Deșteaptă-te, române!', 1989]);

export const flags = (inputArray) => {
  const array = inputArray.slice();
  const results = [];
  for (let i = 0; i < array.length; i++) {
    if ((i + 1) % 8 !== 0 && (i + 2) % 8 !== 0) {
      const current = array[i].color + array[i + 1].color + array[i + 2].color;
      if (flagMap.has(current)) results.push(flagMap.get(current));
    }
  }
  return results.length ? results : [];
};

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const [x, circle, triangle, square, pentagon, hexagon] = [
  '\u0058',
  '\u25EF',
  '\u25B3',
  '\u25A2',
  '\u2B20',
  '\u2B21',
];

const shapes = [x, circle, triangle, square, pentagon, hexagon];

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');

const randomize = (array) => array[Math.floor(Math.random() * array.length)];

module.exports = { colors, shapes, chars, randomize };

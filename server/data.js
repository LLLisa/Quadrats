const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const shapes = ['x', 'circle', 'triangle', 'square', 'pentagon', 'hexagon'];

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');

const randomize = (array) => array[Math.floor(Math.random() * array.length)];

module.exports = { colors, shapes, chars, randomize };

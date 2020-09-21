let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];
/*
let mySmallMaze = [
  ['0[0]', '0[1] ', '0[2]'],
  ['1[0]',   '*',   '1[2]'],
  ['2[0]', '2[1]',   'e']
];
*/

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

const mazeOneExit = (c) => {
  if (c === 'e') return true;
  if  (c === '*') return false;

  const R = 0[+1];
  const D = +1[0];
  const L = 0[-1];
  const U = -1[0];
}

let c = 0[0];
console.log(mazeOneExit(c));
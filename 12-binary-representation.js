const toBinary = function (n) {
  if (n === 1) return "1";
  const endBit = n % 2;
  const remainderBit = Math.floor(n / 2);
  return toBinary(remainderBit) + endBit.toString();
};

console.log(toBinary(10));
console.log(toBinary(5));
console.log(toBinary(15));
console.log(toBinary(235));

/*

input             output
base-10           8 4 2 1
--------------------------
1                 0 0 0 1
2                 0 0 1 0
3                 0 0 1 1
4                 0 1 0 0
5                 0 1 0 1
6                 0 1 1 0
7                 0 1 1 1
8                 1 0 0 0
9                 1 0 0 1
10                1 0 1 0
11                1 0 1 1
12                1 1 0 0
13                1 1 0 1
14                1 1 1 0
15                1 1 1 1

          128 64 32 16  8 4 2 1
          1   1  1  0   1 0 1 1

*/

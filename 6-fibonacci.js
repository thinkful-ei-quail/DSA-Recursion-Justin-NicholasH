/*
input     output
1         1
2         1
3         2
4         3
5         5
6         8
7         13
*/

// const fib = function (nth) {
//   if (nth === 1) return 1;
//   if (nth === 2) return 1;
//   return fib(nth - 1) + fib(nth - 2);
// };

const fibonacci = function (nth) {
  if (nth === 1) return "1";
  const fib = function (nth) {
    if (nth === 1) return 1;
    if (nth === 2) return 1;
    return fib(nth - 1) + fib(nth - 2);
  };
  return `${fibonacci(nth - 1)}, ${fib(nth)}`;
};

console.log(fibonacci(9));

/*
nth       fib       sequence
5         5         `fibonacci(4), 5`
4         3         `fibonacci(3), 3, 5`
3         2         `fibonacci(2), 2, 3, 5`
2         1         `fibonacci(1), 1, 2, 3, 5`
1         1         `1, 1, 2, 3, 5`

fib

input                 output
5                 fib(4)      +         fib(3)
        fib(3)    +    fib(2)         fib(2) + fib(1)
  fib(2) + fib(1)         1             1         1
    1         1


                    4

                3    +   2

              2 +  1   1

            1

                        5

              4                    3

        3           2           2         1

    2        1    1         1

1
*/

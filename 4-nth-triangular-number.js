const nthNumber = (n) => {
  if (n === 1) return 1;
  return n + nthNumber(n - 1)
}

console.log(nthNumber(6))
/* 
1 : 1
2 : 3
3 : 6
4 : 10
5 : 15
6 : 21

(3) - 1 = [2]
          (2) - 1 = [1]
                    (1)

*/


const countingSheep = function (n) {
  if (n === 0) {
    console.log(`All sheep jumped over the fence`);
  } else if (n > 0) {
    console.log(`${n}: Another sheep jumps over the fence`);
    return countingSheep(n - 1);
  }
};

const powerCalculator = (base, exp) => {
  if (exp < 0) 
    return 'exponent should be >= 0';

  if (exp === 0) 
    return 1;

  return base * powerCalculator(base, exp - 1);
}

console.log(powerCalculator(5, 5));

/*
5^3
  5^2
    5^1
      5^0
      1
    5
  5*5
5*5*5
*/

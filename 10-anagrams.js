// Doesn't work yet...
const anagrams = function (string) {
  if (string.length <= 1) return [string];
  const prefix = string[0];
  const theRest = string.slice(1);
  return prefix + anagrams(theRest);
};

console.log(anagrams("east"));

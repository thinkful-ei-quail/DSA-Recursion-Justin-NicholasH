const reverseString = (str) => {
  if (str === "") return "";
  const reverseStr = str[str.length - 1];
  return reverseStr + reverseString(str.slice(0, -1));
};

console.log(reverseString("Give me the pizza."));

/*
str             reverseString       remainingString
'Hello'         'o'                 'Hell'
'Hell'          'o' + 'l'           'Hel'
'Hel'           'ol' + 'l'          'He'
'He'            'oll' + 'e'         'H'
'H'             'olle' + 'H'        ''
''              'olleH' + ''        done
*/

const stringSplitter = (str, sep) => {
  if (!str.includes(sep)) return str;

  const frontPiece = [str.slice(0, str.indexOf(sep))];

  const remainderStr = str.slice(str.indexOf(sep) + 1);
  return frontPiece.concat(stringSplitter(remainderStr, sep));
};

let string = "12/20/2020";
let seperator = "/";
console.log(stringSplitter(string, seperator));

/*
input           newArray                  remainderStr
"02/20/2020"    [] + ["02"]               "20/2020"
"20/2020"       ["02"] + ["20"]           "2020"
"2020"          ["02", "20"] +  ["2020"]  ""
""              ["02", "20", "2020"]      done
*/

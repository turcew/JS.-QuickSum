const symbols = " ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const myString = "abcd";

function quickSum(str) {
  string = string.split("");

  if (/\W/.test(string[0]) || /\W/.test(string[string.length - 1])) {
    return 0;
  }

  if (string.length === 1) {
    return symbols.indexOf(string[0]);
  }

  let res = 0;

  for (let index = 0; index < string.length; index++) {
    res += index * symbols.indexOf(string[index]);
  }
  return res;
}

console.log(quickSum(myString));

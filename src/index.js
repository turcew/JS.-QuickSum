const symbols = " ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
console.log(symbols);

const myString = "abcd";

function quickSum(str) {
  let string = str.toUpperCase();
  string = string.split("");

  if (/\W/.test(string[0]) || /\W/.test(string[string.length - 1])) {
    return 0;
  }

  if (string.length === 1) {
    return symbols.findIndex((el, index) => {
      if (el === string[0]) {
        return index;
      }
    });
  }

  let res = 0;

  for (index in string) {
    res +=
      index *
      symbols.findIndex((el, i) => {
        if (el === string[index]) {
          return i;
        }
      });
  }
  return res;
}

console.log(quickSum(myString));

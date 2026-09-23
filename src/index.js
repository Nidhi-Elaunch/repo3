const { add, subtract, multiply, divide } = require("./math");
const { capitalize, reverse, isPalindrome } = require("./string");

function greet(name) {
  return `Hello, ${capitalize(name)}!`;
}

module.exports = {
  greet,
  add,
  subtract,
  multiply,
  divide,
  capitalize,
  reverse,
  isPalindrome,
};

if (require.main === module) {
  console.log(greet("world"));
  console.log("2 + 3 =", add(2, 3));
}

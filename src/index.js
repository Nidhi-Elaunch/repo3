const {
  add,
  subtract,
  multiply,
  divide,
  power,
  modulo,
  square,
  squareRoot,
  percentage,
  average,
} = require("./calculator");
const { greet } = require("./greeter");

function main() {
  console.log(greet("World"));
  console.log("2 + 3 =", add(2, 3));
  console.log("10 - 4 =", subtract(10, 4));
  console.log("6 * 7 =", multiply(6, 7));
  console.log("20 / 5 =", divide(20, 5));
  console.log("2 ^ 8 =", power(2, 8));
  console.log("17 % 5 =", modulo(17, 5));
  console.log("square(9) =", square(9));
  console.log("sqrt(81) =", squareRoot(81));
  console.log("15% of 200 =", percentage(200, 15));
  console.log("average(4, 8, 12) =", average(4, 8, 12));
}

if (require.main === module) {
  main();
}

module.exports = { main };

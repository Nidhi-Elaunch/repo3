function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

function power(base, exponent) {
  return base ** exponent;
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a % b;
}

function square(n) {
  return n * n;
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error("Cannot take square root of a negative number");
  }
  return Math.sqrt(n);
}

function percentage(value, percent) {
  return (value * percent) / 100;
}

function average(...numbers) {
  if (numbers.length === 0) {
    throw new Error("At least one number is required");
  }
  const total = numbers.reduce((sum, n) => sum + n, 0);
  return total / numbers.length;
}

module.exports = {
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
};

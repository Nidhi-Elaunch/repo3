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
} = require("../src/calculator");

describe("calculator", () => {
  test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtracts two numbers", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("multiplies two numbers", () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test("divides two numbers", () => {
    expect(divide(20, 5)).toBe(4);
  });

  test("throws when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });

  test("raises a number to a power", () => {
    expect(power(2, 8)).toBe(256);
  });

  test("returns remainder with modulo", () => {
    expect(modulo(17, 5)).toBe(2);
  });

  test("throws when modulo by zero", () => {
    expect(() => modulo(10, 0)).toThrow("Cannot divide by zero");
  });

  test("squares a number", () => {
    expect(square(9)).toBe(81);
  });

  test("returns the square root", () => {
    expect(squareRoot(81)).toBe(9);
  });

  test("throws for square root of a negative number", () => {
    expect(() => squareRoot(-4)).toThrow(
      "Cannot take square root of a negative number"
    );
  });

  test("calculates a percentage of a value", () => {
    expect(percentage(200, 15)).toBe(30);
  });

  test("calculates the average of numbers", () => {
    expect(average(4, 8, 12)).toBe(8);
  });

  test("throws when average has no numbers", () => {
    expect(() => average()).toThrow("At least one number is required");
  });
});

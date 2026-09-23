const { add, subtract, multiply, divide } = require("../src/math");

describe("math", () => {
  describe("add", () => {
    test("adds two positive numbers", () => {
      expect(add(2, 3)).toBe(5);
    });

    test("adds negative numbers", () => {
      expect(add(-2, -3)).toBe(-5);
    });

    test("throws when an argument is not a number", () => {
      expect(() => add("2", 3)).toThrow(TypeError);
    });
  });

  describe("subtract", () => {
    test("subtracts two numbers", () => {
      expect(subtract(10, 4)).toBe(6);
    });
  });

  describe("multiply", () => {
    test("multiplies two numbers", () => {
      expect(multiply(4, 5)).toBe(20);
    });
  });

  describe("divide", () => {
    test("divides two numbers", () => {
      expect(divide(10, 2)).toBe(5);
    });

    test("throws when dividing by zero", () => {
      expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
    });
  });
});

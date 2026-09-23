const { greet } = require("../src/greeter");

describe("greeter", () => {
  test("greets a person by name", () => {
    expect(greet("Ada")).toBe("Hello, Ada!");
  });

  test("trims extra whitespace", () => {
    expect(greet("  Ada  ")).toBe("Hello, Ada!");
  });

  test("throws when name is missing", () => {
    expect(() => greet()).toThrow("Name is required");
  });

  test("throws when name is not a string", () => {
    expect(() => greet(42)).toThrow("Name is required");
  });
});

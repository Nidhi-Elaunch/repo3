const { greet } = require("../src/index");

describe("greet", () => {
  test("returns a capitalized greeting", () => {
    expect(greet("world")).toBe("Hello, World!");
  });
});

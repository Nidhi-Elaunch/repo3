const { capitalize, reverse, isPalindrome } = require("../src/string");

describe("string", () => {
  describe("capitalize", () => {
    test("capitalizes the first letter", () => {
      expect(capitalize("hello")).toBe("Hello");
    });

    test("returns an empty string unchanged", () => {
      expect(capitalize("")).toBe("");
    });

    test("throws when value is not a string", () => {
      expect(() => capitalize(123)).toThrow(TypeError);
    });
  });

  describe("reverse", () => {
    test("reverses a string", () => {
      expect(reverse("abc")).toBe("cba");
    });
  });

  describe("isPalindrome", () => {
    test("detects a palindrome", () => {
      expect(isPalindrome("Racecar")).toBe(true);
    });

    test("ignores punctuation and spaces", () => {
      expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    });

    test("returns false for non-palindromes", () => {
      expect(isPalindrome("hello")).toBe(false);
    });
  });
});

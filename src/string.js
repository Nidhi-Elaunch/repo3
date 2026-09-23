function capitalize(value) {
  if (typeof value !== "string") {
    throw new TypeError("Value must be a string");
  }
  if (value.length === 0) {
    return "";
  }
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function reverse(value) {
  if (typeof value !== "string") {
    throw new TypeError("Value must be a string");
  }
  return value.split("").reverse().join("");
}

function isPalindrome(value) {
  if (typeof value !== "string") {
    throw new TypeError("Value must be a string");
  }
  const normalized = value.toLowerCase().replace(/[^a-z0-9]/g, "");
  return normalized === normalized.split("").reverse().join("");
}

module.exports = { capitalize, reverse, isPalindrome };

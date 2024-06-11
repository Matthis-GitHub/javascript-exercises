const palindromes = function (string) {
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

  const validString = string
    .toLowerCase()
    .split("")
    .filter((n) => alphanumerical.includes(n))
    .join("");

  let reversedString = validString.split("").reverse().join("");

  return validString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;

const leapYears = function (number) {
  let leapYear = false;

  if (number % 4 === 0) {
    leapYear = true;
  }
  if (number % 100 === 0) {
    leapYear = false;
    if (number % 400 === 0) {
      leapYear = true;
    }
  }
  return leapYear;
};

// Do not edit below this line
module.exports = leapYears;

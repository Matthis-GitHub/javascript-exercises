const findTheOldest = function (array) {
  const ageArray = array.map((obj) => getAge(obj));

  let oldestAge = 0;
  let oldestIndex = 0;

  for (let i = 0; i < ageArray.length; i++) {
    if (ageArray[i] > oldestAge) {
      oldestAge = ageArray[i];
      oldestIndex = i;
    }
  }

  return array[oldestIndex];

  function getAge(obj) {
    if (!obj.yearOfDeath) {
      return new Date().getFullYear() - obj.yearOfBirth;
    }

    return obj.yearOfDeath - obj.yearOfBirth;
  }
};

// Do not edit below this line
module.exports = findTheOldest;

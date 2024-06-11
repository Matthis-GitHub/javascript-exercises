const removeFromArray = function (array, ...removeValues) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    for (const value of removeValues) {
      if (element === value) {
        array.splice(i, 1);
        i--;
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;

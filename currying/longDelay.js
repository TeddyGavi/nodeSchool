const longDelay = (a) => {
  return function (b) {
    if (b) {
      return longDelay(a + b);
    } else {
      return a;
    }
  };
};

module.exports = longDelay;

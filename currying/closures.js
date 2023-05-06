const closures = (a) => {
  return function (b) {
    return a + b;
  };
};

module.exports = closures;

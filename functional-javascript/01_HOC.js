const repeat = (cb, num) => {
  let count = 0;
  while (count < num) {
    cb();
    count++;
  }
};

module.exports = repeat;

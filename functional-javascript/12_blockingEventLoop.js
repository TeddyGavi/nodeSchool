function repeat(operation, num) {
  if (num <= 0) return;
  operation();
  // modify this so it can be interrupted
  setTimeout(() => {
    return repeat(operation, --num);
  }, 0);
}

module.exports = repeat;

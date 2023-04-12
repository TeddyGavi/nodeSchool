function curryN(fn, n) {
  // SOLUTION GOES HERE
  n = n || fn.length;
  return function curry(arguments) {
    if (n <= 1) return fn(arguments);
    return curryN(fn.bind(this, arguments), n - 1);
  };
}

module.exports = curryN;

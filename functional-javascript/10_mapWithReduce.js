module.exports = function arrayMap(arr, fn, ...rest) {
  // SOLUTION GOES HERE
  // return arr.map((...args) => {
  //   return fn(...args);
  // });

  return arr.reduce((acc, curr, i, arr) => {
    acc.push(fn.call(rest, curr, i, arr));
    return acc;
  }, []);
};

function reduce(arr, fn, initial) {
  return (function thisOne(index, value) {
    if (index > arr.length - 1) {
      return value;
    } else {
      return thisOne(index + 1, fn(value, arr[index], index, arr));
    }
  })(0, initial);
}

module.exports = reduce;

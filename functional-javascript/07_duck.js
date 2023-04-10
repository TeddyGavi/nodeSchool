function duckCount(...args) {
  return args.filter((x) => {
    return Object.prototype.hasOwnProperty.call(x, "quack");
  }).length;
}

module.exports = duckCount;

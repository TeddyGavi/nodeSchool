function duckCount(...args) {
  console.log([...args]);
  return Object.prototype.hasOwnProperty.call(this.args, "quack");
}

module.exports = duckCount;

var slice = Array.prototype.slice;

function logger(namespace) {
  // SOLUTION GOES HERE
  return function (...args) {
    console.log.apply(null, [namespace, ...args]);
  };
}

module.exports = logger;

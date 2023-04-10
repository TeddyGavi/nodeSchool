function repeat(operation, num) {
  // Modify this so it doesn't cause a stack overflow!
  return () => {
    if (num <= 0) return;
    operation();
    return repeat(operation, --num);
  };
}

function trampoline(fn) {
  // You probably want to implement a trampoline!
  let func = fn(...arguments);
  while (typeof func === "function") {
    func = func();
  }
  return func;
}

module.exports = function (operation, num) {
  // You probably want to call your trampoline here!
  const sumRepeat = trampoline(repeat(operation, num));
  // return repeat(operation, num);
  return sumRepeat;
};

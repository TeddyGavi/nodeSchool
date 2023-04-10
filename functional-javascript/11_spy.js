function Spy(target, method) {
  // SOLUTION GOES HERE
  const spy = { count: 0 };
  // console.log(target[method].test);
  const func = target[method];
  target[method] = function () {
    spy.count++;
    return func.apply(target, arguments);
  };
  return spy;
  // return target.test.apply(method, ...arguments);
}

module.exports = Spy;

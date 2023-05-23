const curryFn = (fx) => {
  var arity = fx.length;

  return function f1() {
    var args = Array.prototype.slice.call(arguments, 0);
    console.log(args);
    if (args.length >= arity) {
      return fx.apply(null, args);
    } else {
      return function f2() {
        var args2 = Array.prototype.slice.call(arguments, 0);
        console.log(args2);
        return f1.apply(null, args.concat(args2));
      };
    }
  };
};

module.exports = curryFn;

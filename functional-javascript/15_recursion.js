function getDependencies(tree, final) {
  // SOLUTION GOES HERE
  // Note: Feel free to add additional arguments
  // to this function for use with recursive calls.
  // Or not! There are many ways to recurse.
  const output = final || [];
  const deps = (tree && tree.dependencies) || [];
  Object.keys(deps).map((dep) => {
    const result = dep + "@" + tree.dependencies[dep].version;
    if (output.indexOf(result) === -1) output.push(result);
    return getDependencies(tree.dependencies[dep], output);
  });
  return output.sort();
}

module.exports = getDependencies;

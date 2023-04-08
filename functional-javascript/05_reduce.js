// var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
// {
//   Apple: 2,
//   Banana: 1,
//   Durian: 3
// }

module.exports = countWords = (arr) => {
  return arr.reduce((map, word) => {
    map[word] = ++map[word] || 1;
    return map;
    // }) => {
    //   // if (acc[curr]) {
    //   //   acc[curr] += 1;
    //   // } else {
    //   //   acc[curr] = 1;
    //   // }
    //   // return acc;
  }, {});
};

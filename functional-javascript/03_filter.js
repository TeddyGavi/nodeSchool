// [{message: "..."}, {message: "..."}, ...]

module.exports = getShortMessages = (arr) => {
  return arr.filter((x) => x.message.length < 50).map((x) => x.message);
};

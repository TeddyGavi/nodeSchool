module.exports = checkUsersValid = (goodUsers) => {
  return (allUsersValid = (submittedUsers) => {
    return submittedUsers.every((x) => goodUsers.some((y) => x.id === y.id));
  });
};

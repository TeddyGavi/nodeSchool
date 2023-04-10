async function loadUsers(userIds, load, done) {
  // var users = [];
  // for (var i = 0; i < userIds.length; i++) {
  //   const loaded = await load(userIds[i]);
  //   users.push(load(loaded));
  // }
  // return done(users);
  var users = [];
  for (var i = 0; i < userIds.length; i++) {
    users.push(load(userIds[i]));
  }
  return users;
}

module.exports = loadUsers;

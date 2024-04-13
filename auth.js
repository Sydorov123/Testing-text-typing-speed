const usersModule = require('./users');

function login(username, password) {
  const user = usersModule.findUser(username);
  if (user && user.password === password) {
    return true;
  }
  return false;
}

function register(userData) {
  usersModule.createUser(userData);
}

module.exports = { login, register };

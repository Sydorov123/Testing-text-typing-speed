const users = [
    { id: 1, name: 'Іван', email: 'ivan@example.com' },
  ];
  
  function findUser(username) {
    return users.find(user => user.name === username);
  }
  
  function createUser(userData) {
  }
  
  module.exports = { findUser, createUser };
  
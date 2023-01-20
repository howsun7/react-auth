const data = require('./data');
const users = data.users;

const getUser = (username) => {
  return users.find((user) => user.username === username);
};

const verifyPassword = (user, password) => {
  return user.password === password
};

const isValidUser = (username, password) => {
  // get user
  const user = getUser(username);
  
  // check if the password is correct 
  if (user)
    return verifyPassword(user, password);
    
  return false;
};

  
module.exports = {
  getUser,
  verifyPassword,
  isValidUser,
};
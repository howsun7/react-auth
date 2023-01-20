const jwt = require('jsonwebtoken');
const jwtKey = 'a-top-secret';
const expiresIn = '12h';
 
const createToken = (payload) => {
  // synchronously create token
  try {
    return jwt.sign(
      payload, 
      jwtKey,
      {expiresIn} 
    ); 
  } catch (err) {
    return null;
  }
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, jwtKey); 
  } catch (err) {
    return null;
  }  
};

// TODO
// const refreshToken = (token) => {
// };


module.exports = {
  createToken,
  verifyToken,
}


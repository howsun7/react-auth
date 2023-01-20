const express = require('express');
const app = express();
const port = 3050;
const cors = require('cors');
const auth = require('./auth');
const token = require('./token');

app.use(express.json());
app.use(cors());


app.use('/api/ping', (req, res) => {
  res.json({'msg': 'ping succcess'});
});

app.post('/api/login', (req, res) => {
  
  const {username, password} = req.body;
  
  // valid login -> generate token and return it
  if (auth.isValidUser(username, password)) {    
    const user = auth.getUser(username);

    if (user) {
      const jwtToken = token.createToken({username});
      res.json({username, jwtToken});
    }    
  };  
  
  res.status(401).end();
});

app.get('/api/profile', (req, res) => {
  const reqToken = req.body.token;

  // check if user has a valid login by verifying token
  const payload = token.verifyToken(reqToken);
  
  if (payload) { 
    const username = payload.username;
    const user = auth.getUser(username);
    res.json(user);
  }

  res.status(401).end();
});



app.listen(port, () => {
  console.log(`express api running on ${port}`);
});

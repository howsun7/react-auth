const token = require('./token');

test('createToken returns a JWT when given an object payload', () => { 
  const payload = {username: 'test'};
  const jwtToken = token.createToken(payload);
  expect(
    jwtToken.match(/\./g).length
  ).toBe(2);
});

test('createToken returns null when given anything but a proper payload', () => {
  const payload = 'test';
  expect(
    token.createToken(payload)
  ).toBe(null);
});

test('verifyToken returns token metadata when the token pass in is valid', () => {
  const jwtToken = token.createToken({test: 'test'});
  expect(
    token.verifyToken(jwtToken).hasOwnProperty('test')
  ).toBe(true);
});

test('verifyToken returns null when the token param is not valid', () => {
  const jwtToken = 'a-fake-token';
  expect(
    token.verifyToken(jwtToken)
  ).toBe(null)
});
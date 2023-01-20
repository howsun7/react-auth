const auth = require('./auth');
const data = require('./data');

test('getUser return user given the correct username', () => {
  const user = data.users[0];
  expect(
    auth.getUser(user.username)
  ).toBe(user);
});

test('getUser returns undefined when username does not exist', () => {
  expect(
    auth.getUser('bad username')
  ).toBe(undefined);
});

test('verifyPassword returns true when password is correct', () => {
  const user = data.users[0];
  expect(
    auth.verifyPassword(user, 'test')
  ).toBe(true);
});

test('verifyPassword return false with incorrect password', () => {
  const user = data.users[0];
  expect(
    auth.verifyPassword(user, 'wrongpwd')
  ).toBe(false)
});

test(
  'isValidUser returns true when there exist a user with the correct username and password',
  () => {
    expect(
      auth.isValidUser('test', 'test')
    ).toBe(true);
  }
);

test(
  'isValidUser returns false when there exist a user with the correct username and a wrong password',
  () => {
    expect(
      auth.isValidUser('test', 'wrongpwd')
    ).toBe(false);
  }
);

test(
  'isValidUser returns false when username and password are both incorrect',
  () => {
    expect(
      auth.isValidUser('wrongusername', 'wrongpwd')
    ).toBe(false)
  } 
);
const model = require('../models/usersModel');

const registerUser = async ({ name, password }) => {
  const minLengthName = 3;
  const existingUser = await model.userExists(name);
  if (existingUser) {
    return {
      error: { code: 'conflict', message: 'User exists.' },
    };
  }

  if (name.length < minLengthName) {
    return {
      error: { code: 'invalid', message: 'name must be 3 or more characters' },
    };
  }

  return model.usersRegister(name, password);
};

module.exports = {
  registerUser,
};
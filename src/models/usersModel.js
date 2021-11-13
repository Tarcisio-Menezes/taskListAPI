const connection = require('./connection');

const userExists = async (name) => {
  try {
    const db = await connection();
    const search = await db.collection('users').findOne({ name });
    if (search) return search;
    return false;
  } catch (err) {
      return ({
        error: 'Error when looking for users in the database',
        code: err,
      });
    }
};

const usersRegister = async (name, password) => {
  try {
    const db = await connection();
    const register = await db.collection('users').insertOne({ name, password });
    return ({
      user: {
        name,
        _id: register.insertedId,
      },
    });
  } catch (err) {
      return ({
        error: { message: 'An error occurred with the database', code: err },
      });
    }
};

module.exports = {
  usersRegister,
  userExists,
};
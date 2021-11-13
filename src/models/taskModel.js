const { ObjectId } = require('mongodb');
const connection = require('./connection');

const taskRegister = async (task, userName) => {
  const { title, description, date, status } = task;
  try {
    const db = await connection();
    const register = await db.collection('tasks').insertOne({
       title, description, date, status, userName });
    return ({ task: { title, 
        description,
        date,
        status,
        userName,
        _id: register.insertedId,
      },
    });
  } catch (err) {
      return ({
        error: 'Error when register task in the database', code: err,
      });
    }
};

const getAll = async (userName) => {
  try {
    const db = await connection();
    return db.collection('tasks').find({ userName }).toArray();
  } catch (err) {
      return ({
        error: 'Error when get task in the database',
        code: err,
      });
    }
};

const getAllAlphabeticalOrder = async (userName) => {
  try {
    const db = await connection();
    return db.collection('tasks').find({ userName }, 
      { title: 1, description: 1, _id: 0, date: 1, status: 1 })
        .sort({ title: 1 }).toArray();
  } catch (err) {
      return ({
        error: 'Error when get task in the database',
        code: err,
      });
    }
};

const taskEdit = async (task, userName) => {
  const { id, title, description, date, status } = task;
  try {
    const db = await connection();
    await db.collection('tasks').updateOne({ _id: ObjectId(id) }, 
      { $set: { title, description, date, status, userName } });
    return ({ _id: id,
      title, 
      description,
      date,
      status,
    });
  } catch (err) {
      return ({
        error: 'Error when edit task in the database',
        code: err,
      });
    }
};

const taskDelete = async (taskId) => {
  try {
    const db = await connection();
    const result = await db.collection('tasks').deleteOne({ _id: ObjectId(taskId) });
    return result;
  } catch (err) {
    return ({
      error: 'Error when remove task in the database', code: err });
  }
};

const searchTaskById = async (taskId) => {
  try {
    const db = await connection();
    const task = await db.collection('tasks').findOne(ObjectId(taskId));
    if (task) return task;
    return false;
  } catch (err) {
      return ({
        error: 'Error when sarch task by id in the database', code: err });
    }
};

module.exports = {
  taskRegister,
  getAll,
  taskEdit,
  taskDelete,
  getAllAlphabeticalOrder,
  searchTaskById,
};

const { MongoClient } = require('mongodb');
// require('dotenv').config();

const MONGO_DB_URL = 'mongodb://localhost';
const DB_NAME = 'TaskList';

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db = null;

const connection = () => (db ? Promise.resolve(db) : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
    db = conn.db(DB_NAME);
    return db;
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    }));

module.exports = connection;

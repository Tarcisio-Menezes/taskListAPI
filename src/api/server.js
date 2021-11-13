const app = require('./app');
require('dotenv').config();

// const { PORT } = process.env;

app.listen(3000, () => console.log('Online na porta 3000'));

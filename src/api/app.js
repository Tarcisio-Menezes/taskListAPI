const express = require('express');
const cors = require('cors');
require('dotenv').config();
const usersRoute = require('../routes/usersRoutes');
const loginRoute = require('../routes/loginRoutes');
const tasksRoute = require('../routes/taskRoutes');
const middlewareUsersError = require('../middlewares/usersError');
const middlewareLoginError = require('../middlewares/loginError');
const middlewareTaskError = require('../middlewares/tasksError');

const app = express();

app.use(cors());
  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(usersRoute);
app.use(middlewareUsersError);

app.use(loginRoute);
app.use(middlewareLoginError);

app.use(tasksRoute);
app.use(middlewareTaskError);

module.exports = app;

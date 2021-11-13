const router = require('express').Router();
const controller = require('../controllers/usersController');

router.post('/users', controller.registerUser);

module.exports = router;

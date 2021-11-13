const router = require('express').Router();
const controller = require('../controllers/taskController');
const middlewareAuth = require('../middlewares/auth');

router.post('/tasks', middlewareAuth, controller.taskRegister);
router.get('/tasks', middlewareAuth, controller.getAllTasksUser);
router.get('/tasks/order', middlewareAuth, controller.getAllAlphOrder);
router.put('/tasks/:id', middlewareAuth, controller.taskEdit);
router.delete('/tasks/:id', middlewareAuth, controller.removeTask);

module.exports = router;

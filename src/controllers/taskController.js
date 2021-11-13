const joi = require('joi').extend(require('@joi/date'));
const rescue = require('express-rescue');
const service = require('../services/taskService');

const taskRegister = rescue(async (req, res, next) => {
  const { error } = joi.object({
    title: joi.string().required(),
    description: joi.string().required(),
    date: joi.date().format('DD/MM/YY').utc().required(),
    status: joi.string().required(),
  }).validate(req.body);

  if (error) return next(error);

  const { title, description, date, status } = req.body;

  const { name } = req.user;

  const task = { title, description, date, status };

  const register = await service.registerTask(task, name);
  if (register.error) return next(register.error);
  return res.status(201).json(register);
});

const getAllTasksUser = rescue(async (req, res, next) => {
  const { name } = req.user;
  const getAll = await service.getAllTask(name);
  if (getAll.error) return next(getAll.error);
  return res.status(200).json(getAll);
});

const getAllAlphOrder = rescue(async (req, res, next) => {
  const { name } = req.user;
  const getAll = await service.getAllAlphOrder(name);
  if (getAll.error) return next(getAll.error);
  return res.status(200).json(getAll);
});

const taskEdit = rescue(async (req, res, next) => {
  const { name } = req.user;
  const { id } = req.params;

  const { error } = joi.object({
    title: joi.string().required(),
    description: joi.string().required(),
    date: joi.date().format('DD/MM/YY').utc().required(),
    status: joi.string().required(),
  }).validate(req.body);

  if (error) return next(error);

  const { title, description, date, status } = req.body;

  const task = { id, title, description, date, status };
  const edit = await service.taskEdit(task, name);
  if (edit.error) return next(edit.error);
  return res.status(200).json(edit);
});

const removeTask = rescue(async (req, res, next) => {
  const { name } = req.user;
  const { id } = req.params;

  const remove = await service.removeTask(id, name);
  if (remove.error) return next(remove.error);
  return res.status(204).send();
});

module.exports = {
  taskRegister,
  getAllTasksUser,
  getAllAlphOrder,
  taskEdit,
  removeTask,
};

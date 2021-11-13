const joi = require('joi');
const rescue = require('express-rescue');
const service = require('../services/usersService');

const registerUser = rescue(async (req, res, next) => {
  const { error } = joi.object({
    name: joi.string().required(),
    password: joi.string().required(),
  }).validate(req.body);

  if (error) return next(error);

  const { name, password } = req.body;

  const result = await service.registerUser({ name, password });
  if (result.error) return next(result.error);
  return res.status(201).json(result);
});

module.exports = {
  registerUser,
};

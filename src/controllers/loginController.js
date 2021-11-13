const joi = require('joi');
const rescue = require('express-rescue');
const service = require('../services/loginService');

const userLogin = rescue(async (req, res, next) => {
  const { error } = joi.object({
    name: joi.string().required(),
    password: joi.string().required(),
  }).validate(req.body);

  if (error) return next(error);

  const { name, password } = req.body;

  const token = await service.userLogin(name, password);
  if (token.error) return next(token.error);
  return res.status(200).json(token);
});

module.exports = {
  userLogin,
};

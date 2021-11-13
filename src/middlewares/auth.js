const jwt = require('jsonwebtoken');
// require('dotenv').config();

module.exports = (req, res, next) => {
  const secret = 'MeCoNtRaTa';
  try {
    const token = req.headers.authorization;
    if (!token) {
      const error = ({ code: 'missingAuthToken' });
      return next(error);
    }
    const decoded = jwt.verify(token, secret);
    req.user = {
      name: decoded.data.user,
    };
    next();
  } catch (err) {
      return res.status(401).json({
        message: 'jwt malformed',
      });
  }
};

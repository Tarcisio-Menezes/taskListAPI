module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(401)
    .json({
      message: 'All fields must be filled',
    });
  }

  if (err.code === 'invalidLogin') {
    return res.status(401).json({
      message: 'Incorrect username or password',
  });
  }
};

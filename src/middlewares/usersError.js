module.exports = (err, _req, res, _next) => {
  if (err.isJoi || err.code === 'invalid') {
    return res.status(400)
    .json({
      message: 'Invalid entries. Try again.',
    });
  }

  if (err.code === 'conflict') {
    return res.status(409).json({
      message: 'Name already registered',
    });
  }
};

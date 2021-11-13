module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(400).json({ message: err.message });
  }

  if (err.code === 'missingAuthToken') {
    return res.status(401).json({ message: 'missing auth token' });
  }

  if (err.code === 'invalid') {
    return res.status(401).json({ message: 'invalid taskId or entries' });
  }

  return res.status(500).json({ message: 'fatal error' });
};

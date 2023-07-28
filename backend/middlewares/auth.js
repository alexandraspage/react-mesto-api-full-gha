const jwt = require('jsonwebtoken');
const { UnauthorizedError } = require('./error');
const { NODE_ENV, JWT_SECRET } = process.env;

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization);
  console.log(process.env.NODE_ENV);

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new UnauthorizedError());
  }

  let payload;
  const token = authorization.replace('Bearer ', '');

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    next(new UnauthorizedError(err));
  }
  req.user = payload;
  next();
};

module.exports = auth;

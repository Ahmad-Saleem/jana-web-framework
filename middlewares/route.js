const routerMiddleware = (req, res, next) => {
  console.log('Request URL:', req.originalUrl);
  console.log('Request Type:', req.method);
  console.log('Request Params:', req.params);
  next();
};

module.exports = routerMiddleware;

const express = require('express');
let app = express();

// routers
let router = require('./routes/main');
let apiRouter = require('./routes/api');

//  Application-level middleware
let appMiddleware = require('./middlewares/app');
// Router-level middleware
let routerMiddleware = require('./middlewares/route');
// third-party middleware
let thirdParty = require('./middlewares/third-party');

// use middleware
app.use('/',
 appMiddleware,
 thirdParty('compression')());

 router.use(routerMiddleware);
 app.use('/', router);
 app.use('/api', apiRouter);


// views
let mu2Express = require('mu2express');
// // Register '.mustache' extension with The Mustache Express
app.engine('mustache', mu2Express.engine);
app.set('view engine', 'mustache');
app.set('views', './views');





app.listen(3000, function() {
    console.log('Listening on port 3000. http://127.0.0.1:3000');
});

module.exports = app;

const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');

const userService = require('../api/UserService');
// configure app to use bodyParser()
// this will let us get the data from a POST
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// define the home page route
router.get('/', function (req, res, next) {
res.json({code: 200, message: 'Welcome !!'});
})

router.get('/users', function (req, res, next) {
let users = userService.getAllUsers();
res.json(users);
})


module.exports = router;

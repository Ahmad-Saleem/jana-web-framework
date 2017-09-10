//let user = require('../models/User');
var db = require('../config/db');


class UserService {
  function getAllUsers() {
    db.connect();
    db.query('SELECT * From user', function (err, rows, fields) {
      if (err) throw err

      console.log('The solution is: ', rows[0].solution)
      return rows;
    })

    db.end()
  }
};

module.exports = UserService;

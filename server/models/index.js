var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('select * FROM messages', (err, results) => {
        if (err) {
          console.log(err,"this is an error ");
        } else {
          callback(null, results);
          // console.log('hey i have results in index.js');
        }
      });

    }, // a function which produces all the messages
    post: function () {

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (data, callback) {
      db.query(`insert into username (username) values(${data})`, (err) => {
        if (err) {
          console.log('you suck ;) ');
        } else {
          callback(null);
        }
      });
    }
  }
};


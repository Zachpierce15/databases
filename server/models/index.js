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
    get: function (callback) {
      db.query('select * from username', (err, results) => {
        if(err) {
          console.log(err)
        } else {
          callback(null, results);
        }
      });
    },
    post: function (data, callback) {
      // console.log('THIS IS DATA: ', data);
      var userNameToUse = `insert into username (username) values ('${JSON.stringify(data[0].username)}')`;
      console.log(userNameToUse, typeof userNameToUse);
      db.query(userNameToUse, (err) => {
        if (err) {
          console.log('you suck ;) ');
        } else {
          callback(null);
        }
      });
    }
  }
};


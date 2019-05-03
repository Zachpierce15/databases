var models = require('../models');
const fs = require('fs');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, results) => {
        if (err) {
          console.log('error!');
        } else {
          res.write(results);
          res.end();
          // callback(null, message);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, results ) => {
        if (err) {
          console.log(err)
        } else {
          res.write(results)
          res.end();
        }
      });
    },
    post: function (req, res) {
      console.log("the beginning")
      var postUser = req.body;
      console.log("THIS IS POSTUSER,",postUser)
      models.users.post(postUser, (err) => {
        if (err) {
          throw 'post req error';
        } else {
          console.log("AYAYAYAYAYAYAY!!")
          res.end();
        }
      });
    }
  }
};


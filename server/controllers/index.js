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
    get: function (req, res) {},
    post: function (req, res) {
      console.log("the beginning")
      var postUser = req.body.username;
      models.messages.post(postUser, (err) => {
        if (err) {
          console.log('post req error');
        } else {
          res.end();
        }
      });
    }
  }
};


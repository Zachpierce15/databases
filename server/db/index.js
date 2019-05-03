var mysql = require('mysql');
var dbConnection = mysql.createConnection({
    host     : 'localhost',
    user     : 'student',
    password : 'student',
    database : 'chat'
  });
dbConnection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to the MySQL server.');
});



// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
module.exports = dbConnection;
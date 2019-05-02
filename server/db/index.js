var mysql = require('mysql');
var dbConnection = mysql.createConnection({
    host     : 'http://127.0.0.1:3000',
    user     : 'student',
    password : 'student',
    database : 'chat'
  });
  console.log("ITS A GREAT NIGHT")
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
dbConnection.connect();
module.exports = dbConnection;
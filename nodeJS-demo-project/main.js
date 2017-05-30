var msg = "Hello world";
console.log(msg);
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost:3306",
    user: "root",
    password: ""
});

connection.connect(function(err){
    console.log(err);
    console.log("connection failed");
});

var query = connection.query("Select count(*) from user",function(err,result){
    console.log(result);
});

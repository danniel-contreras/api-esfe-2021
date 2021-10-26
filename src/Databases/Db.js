const mysql = require('mysql');


const mysqlconecion = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'password',
    database: 'esfe2021'

});


mysqlconecion.connect(function(err){
    if (err){
        console.log(err);
        return;
    }
    else{
        console.log('database is conected');
    }
});

module.exports = mysqlconecion;
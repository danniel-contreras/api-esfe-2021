const mysql = require('mysql');


const mysqlconecion = mysql.createConnection({
    host:'bfuo3jf2tpia3o75zqqi-mysql.services.clever-cloud.com',
    user: 'uepv42levbxkbaap',
    password: 'Jp0CvAEORSOqPyD2v2hI',
    database: 'bfuo3jf2tpia3o75zqqi'

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
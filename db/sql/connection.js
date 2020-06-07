const mysql = require('mysql');

module.exports =  () => {
    let connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'Godfather123!',
        port: 3306,
        database: 'Data for MySQL'
    });

    connection.connect();

   return connection

};
/*

*/
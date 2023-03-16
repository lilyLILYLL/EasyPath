const mysql = require("mysql");
connectSQL = function () {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "users",
        port: "3000",
    });
    return connection;
};

exports.login = function (email, pw) {
    var promise = new Promise(function (resolve, reject) {
        var connection = connectSQL();
        connection.connect();
        var sql = "insert into login (email, password) values (?,?)";
        connection.query(sql, [email, pw], function (error, results, fields) {
            if (error) {
                reject(error);
            }
            resolve(results);
        });
        connection.end();
    });
    promise.then(
        function (value) {
            return value;
        },
        function (value) {}
    );
    return promise;
};

const mysql = require('mysql');
const { MYSQL_USER, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;

let conexion = mysql.createConnection({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
});

conexion.connect((err) => {
  if (err) {
    console.log('Error al conectarse a la DB');
    return;
  } else {
    console.log('Conectado con exito a la DB!');
  }
});

module.exports = conexion;

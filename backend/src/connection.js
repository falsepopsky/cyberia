const mysql = require('mysql2');
const { MYSQL_USER, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_DATABASE, MYSQL_PORT } =
  process.env;

let conexion = mysql.createConnection({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
  port: MYSQL_PORT,
});

conexion.connect((err) => {
  if (err) {
    console.error(err);
    console.log('Error al conectarse a la DB');
  } else {
    console.log('Conectado con exito a la DB!');
  }
});

module.exports = conexion;

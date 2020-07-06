const mysql = require('mysql');

let conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cyberia_bd',
});

conexion.connect((err) => {
  if (err) throw err;

  console.log('Conectado con exito!');
});

module.exports = conexion;

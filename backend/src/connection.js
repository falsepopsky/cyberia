const mysql = require('mysql');

let conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cyberia_bd',
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

const deseadosCtrl = {};
const conexion = require('../connection');

deseadosCtrl.obtenerWishlistRoutes = (req, res) => {
  let sqlSelect = `SELECT pm_nombre_artista as nombreArtista, pm_nombre_album as nombreAlbum, pm_cover as cover
  FROM producto_musica
  INNER JOIN producto_musica ON pm_id = ld_pm_id WHERE ld_usr_id = ?`;
  let values = [req.params.userId];
  conexion.query(sqlSelect, values, (err, result, fields) => {
    if (err) {
      res.status(200).json({
        status: 'error',
        message: 'Error al obtener favoritos',
      });
    } else {
      res.status(200).json(result);
    }
  });
};

deseadosCtrl.agregarWishlistRoutes = (req, res) => {
  let sqlInsert = `INSERT INTO lista_deseados VALUES (?, ?)`;
  let values = [req.body.userId, req.body.id];

  conexion.query(sqlInsert, values, (err, result, fields) => {
    if (err) {
      res.json({
        status: 'error',
        message: 'Error al agregar a la lista de deseados',
      });
    } else {
      res.json({
        status: 'ok',
        message: 'Agregado a la lista de deseados',
      });
    }
  });
};

deseadosCtrl.borrarWishlistRoutes = (req, res) => {
  let sqlDelete = `DELETE FROM lista_deseados WHERE ld_usr_id = ? AND ld_pm_id = ?`;
  let values = [req.body.userId, req.body.id];
  conexion.query(sqlDelete, values, (err, result, fields) => {
    if (err) {
      res.status(404).json({
        status: 'error',
        message: 'Error al eliminar de la lista de deseados',
      });
    } else {
      res.status(200).json({
        status: 'ok',
        message: 'Eliminado de la lista de deseados',
      });
    }
  });
};

module.exports = deseadosCtrl;

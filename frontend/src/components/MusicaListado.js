import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import MusicaTarjeta from './MusicaTarjeta';

const ListadoMusica = () => {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    async function getMusicPubs() {
      const URL_API_PUBLICACIONES_MUSICA =
        'http://localhost:8888/api/musica/listamusicaroutes';
      let response = await fetch(URL_API_PUBLICACIONES_MUSICA);
      let data = await response.json();
      setPublicaciones(data);
    }
    getMusicPubs();
  }, []);

  return (
    <Row className="m-4">
      {publicaciones.map((publicacion) => {
        return (
          <MusicaTarjeta
            key={publicacion.id}
            id={publicacion.id}
            cover={publicacion.cover}
            nombreArtista={publicacion.nombreArtista}
            nombreAlbum={publicacion.nombreAlbum}
          />
        );
      })}
    </Row>
  );
};

export default ListadoMusica;

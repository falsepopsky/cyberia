import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import MusicaTarjeta from './MusicaTarjeta';

const ListadoMusica = () => {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    async function getMusicPubs() {
      let response = await fetch(
        'http://localhost:8888/musica/listamusicaroutes'
      );
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

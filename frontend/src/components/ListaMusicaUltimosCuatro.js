import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import MusicaTarjeta from './MusicaTarjeta';

const ListadoMusica = () => {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    async function getLastFourPost() {
      const API_ROUTE_LAST_FOUR_MUSIC_POSTS =
        'http://localhost:8888/api/musica/ultimascuatropublicaciones';
      let response = await fetch(API_ROUTE_LAST_FOUR_MUSIC_POSTS);
      let data = await response.json();
      setPublicaciones(data);
    }
    getLastFourPost();
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

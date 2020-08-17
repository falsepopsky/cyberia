import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './styles/MusicaProductHomePage.css';

export default () => {
  let [layer, setLayer] = useState(null);

  useEffect(() => {
    async function getLayerPost() {
      const apiLayerRoute = 'http://localhost:8888/api/musica/layer';
      let response = await fetch(apiLayerRoute);
      let data = await response.json();
      setLayer(data);
    }
    getLayerPost();
  }, []);

  return (
    layer && (
      <Row>
        <Col md={{ span: 4, offset: 1 }} lg={{ span: 5, offset: 1 }}>
          <img
            src={layer.cover}
            alt={layer.nombreAlbum}
            className="mt-4 img-fluid"
          />
        </Col>
        <Col
          md={{ span: 6, offset: 1 }}
          lg={{ span: 4, offset: 1 }}
          className="mt-4 text-center align-items-stretch justify-content-center"
        >
          <h3 id="layer-nombre-album">{layer.nombreAlbum}</h3>
          <h3 id="layer-nombre-artista">{layer.nombreArtista}</h3>
          <p id="layer-nombre-descripcion"> {layer.descripcion}</p>
          <Link
            to={'/musicdetalle/' + layer.id}
            className="nav-link btn btn-dark btn-sm d-inline-block mt-4 btn-layer"
            style={{ margin: '1em' }}
          >
            MORE INFO
          </Link>
        </Col>
      </Row>
    )
  );
};

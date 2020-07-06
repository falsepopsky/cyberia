import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './styles/MusicaTarjeta.css';
import { Link } from 'react-router-dom';

export default (props) => (
  <Col
    md={3}
    sm={4}
    className="mb-4 text-center d-flex align-items-stretch justify-content-center"
  >
    <Card id="musica-tarjeta">
      <Card.Body>
        <img
          id="imagen-musica-tarjeta"
          src={props.cover}
          className="card-img-top"
          alt="cover-music"
        />
      </Card.Body>

      <Card.Footer id="footer-musica-tarjeta">
        <p id="nombre-artista-tarjeta">{props.nombreArtista}</p>
        <Link to={'/musicdetalle/' + props.id}>
          <p id="nombre-album-tarjeta">{props.nombreAlbum}</p>
        </Link>
      </Card.Footer>
    </Card>
  </Col>
);

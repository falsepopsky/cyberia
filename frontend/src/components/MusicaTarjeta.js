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
          src={props.cover}
          className="card-img-top imagen-musica-tarjeta"
          alt={props.nombreAlbum}
        />
      </Card.Body>

      <Card.Footer className="footer-musica-tarjeta">
        <p className="nombre-artista-tarjeta">{props.nombreArtista}</p>
        <Link to={'/musicdetalle/' + props.id}>
          <p className="nombre-album-tarjeta">{props.nombreAlbum}</p>
        </Link>
      </Card.Footer>
    </Card>
  </Col>
);

import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './styles/MusicaTarjeta.css';
import { Link } from 'react-router-dom';

export default (props) => (
  <Col
    xs={12}
    sm={6}
    md={4}
    lg={3}
    className="mb-4 text-center d-flex align-items-stretch justify-content-center"
  >
    <Card className="border-0 bg-white musica-tarjeta">
      <Card.Body className="p-0">
        <img
          src={props.cover}
          className="card-img-top imagen-musica-tarjeta"
          alt={props.nombreAlbum}
        />
      </Card.Body>

      <Card.Footer className="footer-musica-tarjeta border-0 bg-white">
        <p className="text-dark nombre-artista-tarjeta">
          {props.nombreArtista}
        </p>
        <Link to={'/musicdetalle/' + props.id}>
          <p className="text-dark nombre-album-tarjeta">{props.nombreAlbum}</p>
        </Link>
      </Card.Footer>
    </Card>
  </Col>
);

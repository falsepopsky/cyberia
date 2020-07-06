import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './styles/EventoTarjeta.css';
import { Link } from 'react-router-dom';

export default (props) => (
  <Col className="mb-5 text-center d-flex align-items-stretch justify-content-center">
    <Card id="evento-tarjeta">
      <Card.Body>
        <p id="name-day">{props.nombreDia}</p>
        <Link to={'/eventsdetalle/' + props.id}>
          <p id="day-month">{props.diaMes}</p>
        </Link>
        <img
          id="imagen-evento"
          src={props.bannerEvento}
          className="card-img-top"
          alt="banner-evento"
        />
      </Card.Body>
    </Card>
  </Col>
);

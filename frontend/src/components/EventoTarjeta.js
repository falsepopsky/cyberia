import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './styles/EventoTarjeta.css';
import { Link } from 'react-router-dom';

export default (props) => (
  <Col className="mb-5 text-center d-flex align-items-stretch justify-content-center">
    <Card className="bg-white rounded evento-tarjeta">
      <Card.Body>
        <p className="text-dark name-day">{props.nombreDia}</p>
        <Link to={'/eventsdetail/' + props.id}>
          <p className="day-month">{props.diaMes}</p>
        </Link>
        <img
          src={props.bannerEvento}
          className="card-img-top imagen-evento"
          alt="banner-evento"
        />
      </Card.Body>
    </Card>
  </Col>
);

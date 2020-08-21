import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EventoCalendar from '../components/EventoCalendar';

const Evento = () => {
  return (
    <Row className="text-center">
      <Col>
        <h2 className="my-5">EVENTS</h2>
        <EventoCalendar />
      </Col>
    </Row>
  );
};

export default Evento;

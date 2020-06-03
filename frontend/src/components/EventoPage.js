import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EventoCalendar from "./EventoCalendar";

const Evento = () => {
  return (
    <>
      <Row className="text-center">
        <Col>
          <h2 style={{ marginTop: "1em", marginBottom: "2em" }}>EVENTS</h2>
          <EventoCalendar />
        </Col>
      </Row>
    </>
  );
};

export default Evento;

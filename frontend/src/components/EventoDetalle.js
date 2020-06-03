import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faHourglassStart,
  faHourglassEnd,
  faDoorOpen,
  faHandHoldingUsd,
  faMusic,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./styles/EventoDetalle.css";
import { useParams } from "react-router-dom";
import moment from "moment";

export default () => {
  let { id } = useParams();
  let [evento, setEvento] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8888/eventos/" + id)
      .then((response) => response.json())
      .then((data) => {
        setEvento(data);
      });
  }, []);
  return (
    evento && (
      <>
        <Row>
          <Col className="mt-4 text-center align-items-stretch justify-content-center">
            <h3 id="nombre-evento-detalle">{evento.tituloEvento}</h3>
          </Col>
        </Row>
        <Row id="imdetl-evento-detalle">
          <Col
            sm={6}
            md={6}
            lg={4}
            className="mt-4 text-center align-items-stretch justify-content-center"
          >
            <img
              style={{ maxWidth: "300px", maxHeight: "420px" }}
              src={evento.bannerEvento}
              alt="banner-evento"
              className="imgFluid"
            />
          </Col>
          <Col
            sm={6}
            md={6}
            lg={4}
            className="mt-4 text-center align-items-stretch justify-content-center"
          >
            <h3 id="detalles-evento-detalle">Details</h3>
            <p style={{ marginTop: "2em" }}>
              Date <FontAwesomeIcon color="black" icon={faCalendarAlt} />
              {moment(evento.fecha).format("MMM Do")}
            </p>
            <p>
              Open <FontAwesomeIcon color="black" icon={faHourglassStart} />
              {evento.horarioApertura} hs
            </p>
            <p>
              Close <FontAwesomeIcon color="black" icon={faHourglassEnd} />
              {evento.horarioCierre} hs
            </p>
            <p>
              Door <FontAwesomeIcon color="black" icon={faDoorOpen} />
              {evento.precioPuerta}
            </p>
            <p>
              Advance <FontAwesomeIcon color="black" icon={faHandHoldingUsd} />
              {evento.precioAdvance}
            </p>
            <p>
              Styles <FontAwesomeIcon color="black" icon={faMusic} />
              {evento.generos}
            </p>
            <Button variant="info">
              Buy <FontAwesomeIcon color="white" icon={faCartPlus} />
            </Button>
          </Col>
          <Col
            sm={12}
            md={12}
            lg={4}
            className="mt-4 text-center align-items-stretch justify-content-center"
          >
            <h2 id="lineup-evento-detalle">Line Up</h2>
            <p style={{ marginTop: "2em" }}>{evento.lineUp}</p>
          </Col>
        </Row>

        <Row>
          <Col className="mt-4 text-center align-items-stretch justify-content-center">
            <h2 id="descripcion-evento-detalle">Description</h2>
            <p style={{ marginTop: "2em" }}>{evento.descripcion}</p>
          </Col>
        </Row>
      </>
    )
  );
};

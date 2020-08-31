import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faHourglassStart,
  faHourglassEnd,
  faDoorOpen,
  faHandHoldingUsd,
  faMusic,
  faCartPlus,
} from '@fortawesome/free-solid-svg-icons';
import '../components/styles/EventoDetalle.css';
import { useParams } from 'react-router-dom';
import moment from 'moment';

export default () => {
  let { id } = useParams();
  let [evento, setEvento] = useState(null);

  useEffect(() => {
    async function getEventDetail() {
      const API_EVENT_DETAIL_ROUTE =
        'http://localhost:8888/api/eventos/detail/';
      let response = await fetch(`${API_EVENT_DETAIL_ROUTE}${id}`);
      let data = await response.json();
      setEvento(data);
    }
    getEventDetail();
  }, [id]);
  return (
    evento && (
      <>
        <Row id="contenedor-uno-event">
          <Col
            sm={{ span: 4, offset: 1 }}
            md={{ span: 4, offset: 1 }}
            lg={{ span: 4, offset: 1 }}
            className="mt-5 text-center align-items-stretch justify-content-center"
          >
            <img
              style={{ maxWidth: '300px', maxHeight: '420px' }}
              src={evento.bannerEvento}
              alt={evento.tituloEvento}
              className="imgFluid"
            />
          </Col>
          <Col
            sm={{ span: 6, offset: 2 }}
            md={{ span: 4, offset: 1 }}
            lg={{ span: 4, offset: 1 }}
            className="my-5 text-center align-items-stretch justify-content-center"
          >
            <h3 id="name-event">{evento.tituloEvento}</h3>
            <p id="date-event">
              <FontAwesomeIcon
                color="black"
                icon={faCalendarAlt}
                transform="left-4"
              />
              {moment(evento.fecha).format('MMM Do')}
            </p>
            <p id="open-event">
              <FontAwesomeIcon
                color="black"
                icon={faHourglassStart}
                transform="left-4"
              />
              {evento.horarioApertura} hs
            </p>
            <p id="close-event">
              <FontAwesomeIcon
                color="black"
                icon={faHourglassEnd}
                transform="left-4"
              />
              {evento.horarioCierre} hs
            </p>
            <br></br>
            <p id="price-door">
              <FontAwesomeIcon
                color="black"
                icon={faDoorOpen}
                transform="left-4"
              />
              {evento.precioPuerta}
            </p>
            <p id="advance-door">
              <FontAwesomeIcon
                color="black"
                icon={faHandHoldingUsd}
                transform="left-4"
              />
              {evento.precioAdvance}
            </p>
            <p id="genres-event">
              <FontAwesomeIcon
                color="black"
                icon={faMusic}
                transform="left-4"
              />
              {evento.generos}
            </p>
            <br></br>
            <Button id="buy-evento" variant="info">
              <FontAwesomeIcon color="white" icon={faCartPlus} /> Buy
            </Button>
            <p id="description-event">{evento.descripcion}</p>
          </Col>
        </Row>
        <Row id="contenedor-dos-event">
          <Col
            sm={{ span: 6, offset: 3 }}
            md={{ span: 6, offset: 3 }}
            lg={{ span: 6, offset: 3 }}
            className="mt-4 text-center align-items-stretch justify-content-center"
          >
            <h2 id="lineup-titulo-event">Line Up</h2>
            <p id="lineup-contenido-event">{evento.lineUp}</p>
          </Col>
        </Row>
      </>
    )
  );
};

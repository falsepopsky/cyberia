import React, { useState, useEffect } from 'react';
import EventoTarjeta from './EventoTarjeta';
import moment from 'moment';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ListadoEvento = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    async function getEventsFromThisWeek() {
      const API_URL_EVENTS_THIS_WEEK =
        'http://localhost:8888/api/eventos/thisweek';
      let response = await fetch(API_URL_EVENTS_THIS_WEEK);
      let data = await response.json();
      setEventos(data);
    }
    getEventsFromThisWeek();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive} draggable={true}>
      {eventos.map((evento) => {
        return (
          <EventoTarjeta
            key={evento.id}
            id={evento.id}
            nombreDia={moment(evento.nombreDia).format('dddd')}
            diaMes={moment(evento.diaMes).format('MMM Do')}
            bannerEvento={evento.bannerEvento}
          />
        );
      })}
    </Carousel>
  );
};

export default ListadoEvento;

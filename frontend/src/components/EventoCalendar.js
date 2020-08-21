import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const EventsCalendar = () => {
  const localizer = momentLocalizer(moment);
  require('moment/locale/en-gb');

  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    async function getEventsForCalendar() {
      const API_URL_EVENTOS_CALENDARIO = 'http://localhost:8888/api/calendario';
      let response = await fetch(API_URL_EVENTOS_CALENDARIO);
      let data = await response.json();
      setEventos(data);
    }
    getEventsForCalendar();
  }, []);

  const styleEvents = () => {
    const style = {
      backgroundColor: '#367CF7',
      color: 'white',
    };
    return {
      style,
    };
  };

  return (
    <Row>
      <Col className="d-flex justify-content-center m-4">
        <Calendar
          localizer={localizer}
          events={eventos}
          eventPropGetter={styleEvents}
          views={{ month: true, agenda: true }}
          style={{ width: '75vw', height: '85vh' }}
          onDoubleClickEvent={(event) => console.log(event.id)}
        />
      </Col>
    </Row>
  );
};

export default EventsCalendar;

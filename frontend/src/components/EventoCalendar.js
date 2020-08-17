import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

require('moment/locale/en-gb');

export default (props) => {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    async function getEventsForCalendar() {
      let calendarRoute = 'http://localhost:8888/api/calendario';
      let response = await fetch(calendarRoute);
      let data = await response.json();
      setPublicaciones(data);
    }
    getEventsForCalendar();
  }, []);

  return (
    <Row>
      <Col className="d-flex justify-content-center m-4">
        <Calendar
          popup
          localizer={localizer}
          events={publicaciones}
          views={{ month: true, agenda: true }}
          style={{ width: '75vw', height: '85vh' }}
          onDoubleClickEvent={(event) => console.log(event.id)}
        />
      </Col>
    </Row>
  );
};

import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import EventoTarjeta from './EventoTarjeta';
import moment from 'moment';


const ListadoEvento = () => {

    const [eventos, setEventos] = useState([])

    useEffect(() => {
        fetch('http://localhost:8888/eventos').then(
            response => response.json()
        ).then(
            data => {
                setEventos(data);
            }
        )
    }, []
    )


    return (
        <Row className="m-4">

            {

                eventos.map(evento => {
                    return (
                        <EventoTarjeta
                            id={evento.id}
                            nombreDia={moment(evento.nombreDia).format('dddd')}
                            diaMes={moment(evento.diaMes).format("MMM Do")}
                            bannerEvento={evento.bannerEvento}
                        />
                    )
                }
                )

            }

        </Row>
    )
};

export default ListadoEvento;
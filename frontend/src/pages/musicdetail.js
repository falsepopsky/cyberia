import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faHashtag,
  faClone,
  faDollarSign,
  faMusic,
  faFileAudio,
  faHeart,
  faCartPlus,
} from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import '../components/styles/MusicaDetalle.css';

export default () => {
  let { id } = useParams();

  let [publicacion, setPublicacion] = useState(null);

  useEffect(() => {
    async function getMusicDetail() {
      const API_MUSIC_DETAIL_ROUTE =
        'http://localhost:8888/api/musica/publicacionmusica/';
      let response = await fetch(`${API_MUSIC_DETAIL_ROUTE}${id}`);
      let data = await response.json();
      setPublicacion(data);
    }
    getMusicDetail();
  }, [id]);

  return (
    publicacion && (
      <>
        <Row id="contenedor-detail-music">
          <Col
            sm={6}
            md={6}
            lg={{ span: 4, offset: 1 }}
            className="mt-5 text-center align-items-stretch justify-content-center"
          >
            <img
              src={publicacion.cover}
              alt={publicacion.nombreAlbum}
              className="img-fluid mt-4"
            />
          </Col>
          <Col
            sm={6}
            md={6}
            lg={{ span: 5, offset: 1 }}
            className="mt-5 text-center align-items-stretch justify-content-center"
          >
            <h3 className="d-inline" id="artist-name">
              {publicacion.nombreArtista}
            </h3>
            <h3 className="mt-3 mb-5 d-block" id="album-name">
              {publicacion.nombreAlbum}
            </h3>

            <Row>
              <Col xs={12}>
                <p className="mx-3 d-inline datos">
                  <FontAwesomeIcon
                    color="black"
                    icon={faHashtag}
                    transform="left-4"
                  />
                  {publicacion.catalog}
                </p>
                <p className="mx-3 d-inline datos">
                  <FontAwesomeIcon
                    color="black"
                    icon={faCalendarAlt}
                    transform="left-4"
                  />
                  {moment(publicacion.fechaLanzamiento).format('MMM Do YYYY')}
                </p>
                <p className="mx-3 d-inline datos">
                  <FontAwesomeIcon
                    color="black"
                    icon={faClone}
                    transform="left-4"
                  />
                  {publicacion.series}
                </p>
              </Col>
              <Col xs={12}>
                <p className="p-3 d-inline datos">
                  <FontAwesomeIcon
                    color="black"
                    icon={faMusic}
                    transform="left-4"
                  />
                  {publicacion.genero}
                </p>
                <p className="p-3 d-inline datos">
                  <FontAwesomeIcon
                    color="black"
                    icon={faFileAudio}
                    transform="left-4"
                  />
                  {publicacion.audio}
                </p>
                <p className="p-3 d-inline datos">
                  <FontAwesomeIcon
                    color="black"
                    icon={faDollarSign}
                    transform="left-4"
                  />
                  {publicacion.precio} ARS
                </p>
              </Col>
            </Row>

            <Button className="m-4" variant="info">
              <FontAwesomeIcon color="white" icon={faHeart} /> Wishlist
            </Button>
            <Button className="m-4" variant="info">
              <FontAwesomeIcon color="white" icon={faCartPlus} /> Add to Cart
            </Button>

            <h2 className="my-4 title-music">DESCRIPTION</h2>
            <p className="mb-5 contenido">{publicacion.descripcion}</p>

            <h2 className="my-4 title-music">TRACKLIST</h2>
            <p className="mb-5 contenido">{publicacion.tracklist}</p>
          </Col>
        </Row>
      </>
    )
  );
};

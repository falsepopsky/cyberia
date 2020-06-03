import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faHashtag, faClone, faDollarSign, faMusic, faFileAudio, faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import moment from 'moment';

export default () => {

  let { id } = useParams();

  let [publicacion, setPublicacion] = useState(null);

  useEffect(

    () => {
      fetch('http://localhost:8888/productosmusica/' + id).then(
        response => response.json()
      ).then(data => {
        setPublicacion(data);
      })
    }, []

  )

  return (
    publicacion &&
    <>
      <Row>
        <Col sm={6} md={6} lg={4} className="mt-4 text-center align-items-stretch justify-content-center">
          <h3>{publicacion.nombreArtista}</h3>
          <h3>{publicacion.nombreAlbum}</h3>
          <img src={publicacion.cover} alt="cover-album" className="img-fluid" />
        </Col>
        <Col sm={6} md={6} lg={4} className="mt-4 text-center align-items-stretch justify-content-center">
          <h2>RELEASE DETAILS</h2>
          <p style={{ marginTop: "2em" }}> Catalog <FontAwesomeIcon color="black" icon={faHashtag} /> {publicacion.catalog}</p>
          <p> Release date <FontAwesomeIcon color="black" icon={faCalendarAlt} />  {moment(publicacion.fechaLanzamiento).format("MMM Do YYYY")}</p>
          <p> Series <FontAwesomeIcon color="black" icon={faClone} />  {publicacion.series}</p>
          <p> Style <FontAwesomeIcon color="black" icon={faMusic} /> {publicacion.genero}</p>
          <p> Audio <FontAwesomeIcon color="black" icon={faFileAudio} /> {publicacion.audio}</p>
          <p> Price <FontAwesomeIcon color="black" icon={faDollarSign} /> {publicacion.precio} ARS </p>
          <Button
            style={{ marginLeft: "1em", marginRight: "1em" }}
            variant="info"
          >
            Wishlist <FontAwesomeIcon color="white" icon={faHeart} />
          </Button>
          <Button
            style={{ margin: "1em" }}
            variant="info"
          >
            Add to Cart <FontAwesomeIcon color="white" icon={faCartPlus} />
          </Button>
        </Col>
        <Col sm={12} md={12} lg={4} className="mt-4 text-center align-items-stretch justify-content-center">
          <h2>DESCRIPTION</h2>
          <p style={{ marginTop: "2em" }}>{publicacion.descripcion}</p>
        </Col>

      </Row>

      <Row>
        <Col className="mt-4 text-center align-items-stretch justify-content-center">
          <h2>TRACKLIST</h2>
          <p style={{ marginTop: "4.5em" }}>{publicacion.tracklist}</p>

        </Col>
      </Row>
    </>
  );
}
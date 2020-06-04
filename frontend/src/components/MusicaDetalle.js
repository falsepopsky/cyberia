import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faHashtag,
  faClone,
  faDollarSign,
  faMusic,
  faFileAudio,
  faHeart,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import moment from "moment";
import "./styles/MusicaDetalle.css";

export default () => {
  let { id } = useParams();

  let [publicacion, setPublicacion] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8888/listamusicaroutes/publicacionmusica/" + id)
      .then((response) => response.json())
      .then((data) => {
        setPublicacion(data);
      });
  }, []);

  return (
    publicacion && (
      <>
        <Row>
          <Col
            sm={6}
            md={6}
            lg={{ span: 4, offset: 1 }}
            className="mt-4 text-center align-items-stretch justify-content-center"
          >
            <img
              src={publicacion.cover}
              alt="cover-album"
              className="img-fluid mt-4"
            />
          </Col>
          <Col
            sm={6}
            md={6}
            lg={6}
            className="mt-5 text-center align-items-stretch justify-content-center"
          >
            <h3 id="artist-name">{publicacion.nombreArtista}</h3>
            <h3 id="album-name">{publicacion.nombreAlbum}</h3>

            <h2 id="release-details">RELEASE DETAILS</h2>

            <p id="catalog">
              <FontAwesomeIcon
                color="black"
                icon={faHashtag}
                transform="left-4"
              />
              {publicacion.catalog}
            </p>
            <p id="release-date">
              <FontAwesomeIcon
                color="black"
                icon={faCalendarAlt}
                transform="left-4"
              />
              {moment(publicacion.fechaLanzamiento).format("MMM Do YYYY")}
            </p>
            <p id="series">
              <FontAwesomeIcon
                color="black"
                icon={faClone}
                transform="left-4"
              />
              {publicacion.series}
            </p>
            <p id="style">
              <FontAwesomeIcon
                color="black"
                icon={faMusic}
                transform="left-4"
              />
              {publicacion.genero}
            </p>
            <p id="audio">
              <FontAwesomeIcon
                color="black"
                icon={faFileAudio}
                transform="left-4"
              />
              {publicacion.audio}
            </p>
            <p id="price">
              <FontAwesomeIcon
                color="black"
                icon={faDollarSign}
                transform="left-4"
              />
              {publicacion.precio} ARS
            </p>
            <br></br>
            <Button style={{ margin: "1em" }} variant="info">
              Wishlist <FontAwesomeIcon color="white" icon={faHeart} />
            </Button>
            <Button style={{ margin: "1em" }} variant="info">
              Add to Cart <FontAwesomeIcon color="white" icon={faCartPlus} />
            </Button>

            <h2 id="description-title">DESCRIPTION</h2>
            <p id="description-content">{publicacion.descripcion}</p>
          </Col>
        </Row>
        <Row>
          <Col
            sm={{ span: 6, offset: 3 }}
            md={{ span: 6, offset: 3 }}
            lg={{ span: 6, offset: 3 }}
            className="mt-4 text-center align-items-stretch justify-content-center"
          >
            <h2 id="tracklist-title">TRACKLIST</h2>
            <p id="tracklist-content">{publicacion.tracklist}</p>
          </Col>
        </Row>
      </>
    )
  );
};

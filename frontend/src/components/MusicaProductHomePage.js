import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

export default () => {
  let [layer, setLayer] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8888/listamusicaroutes/layer")
      .then((response) => response.json())
      .then((data) => {
        setLayer(data);
      });
  }, []);
  return (
    layer && (
      <Row>
        <Col md={4} lg={5}>
          <img
            src={layer.cover}
            alt="cover-album"
            className="mt-4 img-fluid"
          ></img>
        </Col>
        <Col
          md={8}
          lg={7}
          className="mt-4 text-center align-items-stretch justify-content-center"
        >
          <h3 className="mt-4">{layer.nombreAlbum}</h3>
          <h3 className="mt-4">{layer.nombreArtista}</h3>
          <p className="mt-4"> {layer.descripcion}</p>
          <Link
            to={"/musicdetalle/" + layer.id}
            className="nav-link btn btn-outline-dark btn-sm d-inline-block mt-4"
            style={{ margin: "1em" }}
            variant="outline-dark"
          >
            MORE INFO
          </Link>
        </Col>
      </Row>
    )
  );
};

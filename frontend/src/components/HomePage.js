import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imagenLogo from "../images/cyberia_logo.png";
import Button from "react-bootstrap/Button";
import "./styles/HomePage.css";
import EventoSemana from "./EventoSemana";
import MusicaProductHomePage from "./MusicaProductHomePage";
import ListaMusicaUltimosCuatro from "./ListaMusicaUltimosCuatro";

const HomePage = () => {
  return (
    <>
      <Row id="dottedbox" className="text-center">
        <Col id="overlay">
          <img
            style={{ marginTop: "2em", marginBottom: "4em", width: "30%" }}
            src={imagenLogo}
            alt="logo-banner"
          />
          <p id="story-hero">
            Cyberia first opened on 21st October 2012; though it started as an
            idea many years prior to that. The building alone took over three
            years to convert but the club now stands proudly in the renovated
            space of the Metropolitan Cold Stores in Farringdon, London. Simply
            put, cyberia was conceived by people that go to clubs, for people
            that go to clubs. If you want to know more, check out about section
            below.
          </p>
          <Button id="about" variant="light" size="lg">
            ABOUT
          </Button>
        </Col>
      </Row>
      <Row id="events-section" className="text-center">
        <Col>
          <h2>EVENTS</h2>
          <EventoSemana />
        </Col>
      </Row>

      <Row id="store-section" className="text-center">
        <Col style={{ backgroundColor: "#cecece" }}>
          <h2>STORE</h2>

          <MusicaProductHomePage />

          <h3 className="mt-4">Check out more releases on the store</h3>

          <ListaMusicaUltimosCuatro />

          <Link
            to="/store"
            className="nav-link btn btn-outline-dark btn-sm d-inline-block"
            style={{ margin: "1em" }}
            variant="outline-dark"
          >
            MORE PRODUCTS
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default HomePage;

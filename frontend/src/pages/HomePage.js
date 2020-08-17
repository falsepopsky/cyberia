import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imagenLogo from '../images/cyberia_logo.png';
import '../components/styles/HomePage.css';
import EventoSemana from '../components/EventoSemana';
import MusicaProductHomePage from '../components/MusicaProductHomePage';
import ListaMusicaUltimosCuatro from '../components/ListaMusicaUltimosCuatro';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
  return (
    <>
      <Row id="dottedbox" className="text-center">
        <Col id="overlay">
          <img
            style={{
              marginTop: '2em',
              marginBottom: '4em',
              width: '30%',
              pointerEvents: 'none',
            }}
            src={imagenLogo}
            alt="logo-banner"
          />
          <p id="story-hero" className="text-white">
            Cyberia first opened on 21st October 2012; though it started as an
            idea many years prior to that. The building alone took over three
            years to convert but the club now stands proudly in the renovated
            space of the Metropolitan Cold Stores in Farringdon, London. Simply
            put, cyberia was conceived by people that go to clubs, for people
            that go to clubs. If you want to know more, check out about section
            below.
          </p>
          <Link
            to="/about"
            id="btn-about"
            className="nav-link btn btn-light btn-sm d-inline-block m-5"
            rel="noopener noreferrer"
          >
            ABOUT
          </Link>
        </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <h2 id="event-main-title" className="my-5">
            EVENTS
          </h2>
          <EventoSemana />
        </Col>
      </Row>

      <Row className="text-center">
        <Col style={{ backgroundColor: '#cecece' }}>
          <h2 id="store-section-title" className="my-5">
            STORE
          </h2>
          <MusicaProductHomePage />
          <h3 id="store-section-subtitle" className="my-5">
            Check out more releases on the store
          </h3>
          <ListaMusicaUltimosCuatro />
          <Link
            to="/store"
            id="btn-to-store"
            className="nav-link btn btn-dark btn-sm d-inline-block my-5"
            rel="noopener noreferrer"
          >
            MORE PRODUCTS
          </Link>
        </Col>
      </Row>

      <ContactForm />
    </>
  );
};

export default HomePage;

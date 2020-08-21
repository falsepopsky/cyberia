import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../images/icon_192_ancho.png';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faPhoneSquareAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faMixcloud,
} from '@fortawesome/free-brands-svg-icons';
import './styles/Footer.css';

const Footer = () => {
  return (
    <>
      <Row className="d-flex justify-content-center text-center footer">
        <Col md={3} className="mt-5">
          <img src={Logo} alt="cyberia-logo" />
          <p>
            The website of Cyberia nightclub. Buy tickets for events, music from
            Cyberia record label.
          </p>
        </Col>
        <Col md={3} className="mt-5">
          <h5 className="text-white">Contact</h5>

          <p>
            <FontAwesomeIcon color="white" icon={faMapMarkerAlt} /> 2456 Ray
            Court
          </p>
          <p>
            <FontAwesomeIcon color="white" icon={faPhoneSquareAlt} />{' '}
            910-544-1777
          </p>
          <p>
            <FontAwesomeIcon color="white" icon={faEnvelope} />
            contact@cyberia.com
          </p>
        </Col>
        <Col md={3} className="mt-5">
          <h5 className="text-white">Info</h5>
        </Col>
        <Col md={3} className="mt-5">
          <h5 className="text-white">Social Media</h5>

          <Nav.Link href="https://twitter.com" rel="noopener noreferrer">
            <FontAwesomeIcon color="white" icon={faTwitter} />
          </Nav.Link>
          <Nav.Link href="https://facebook.com" rel="noopener noreferrer">
            <FontAwesomeIcon color="white" icon={faFacebook} />
          </Nav.Link>
          <Nav.Link href="https://instagram.com" rel="noopener noreferrer">
            <FontAwesomeIcon color="white" icon={faInstagram} />
          </Nav.Link>
          <Nav.Link href="https://mixcloud.com" rel="noopener noreferrer">
            <FontAwesomeIcon color="white" icon={faMixcloud} />
          </Nav.Link>
        </Col>
      </Row>
    </>
  );
};

export default Footer;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';
import Logo from '../images/icon_192_ancho.png';
import './styles/NavigationBar.css';

const NavigationBar = (props) => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleHideLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleShowLoginModal = () => {
    setShowLoginModal(true);
  };

  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleHideSignUpModal = () => {
    setShowSignUpModal(false);
  };

  const handleShowSignUpModal = () => {
    setShowSignUpModal(true);
  };
  return (
    <>
      <Navbar id="barra-de-navegacion" variant="dark" expand="lg">
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="logo-cyberia" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="text-center">
          <Nav className="ml-auto">
            {props.admin === true ? (
              <Link
                to="/adminPanel"
                className="nav-link"
                rel="noopener noreferrer"
              >
                Admin Panel
              </Link>
            ) : null}
            <Link to="/events" className="nav-link" rel="noopener noreferrer">
              Events
            </Link>
            <Link to="/store" className="nav-link" rel="noopener noreferrer">
              Store
            </Link>
            <Link to="/about" className="nav-link" rel="noopener noreferrer">
              About
            </Link>
            {!props.user ? (
              <>
                <Button
                  id="btn-sign-up"
                  className="py-0"
                  onClick={handleShowSignUpModal}
                >
                  Sign Up
                </Button>

                <Button
                  id="btn-login"
                  className="py-0"
                  onClick={handleShowLoginModal}
                >
                  Login
                </Button>
              </>
            ) : (
              <>
                <NavDropdown
                  id="btn-logged-user"
                  alignRight
                  title={props.user.nombre}
                  className="btn d-inline-block"
                >
                  <NavDropdown.Item>My Account</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={props.handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <SignUpModal show={showSignUpModal} handleHide={handleHideSignUpModal} />
      <LoginModal
        show={showLoginModal}
        handleHide={handleHideLoginModal}
        handleLoginSuccess={props.handleLoginSuccess}
      />
    </>
  );
};

export default NavigationBar;

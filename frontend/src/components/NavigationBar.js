import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import Logo from "../images/icon_192_ancho.png";
import "./styles/NavigationBar.css";

const NavigationBar = (props) => {
  const history = useHistory();

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
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {props.admin === true ? (
              <Link to="/panel" className="nav-link">
                Admin Panel
              </Link>
            ) : null}
            <Link to="/events" className="nav-link">
              Events
            </Link>
            <Link to="/store" className="nav-link">
              Store
            </Link>
            <Nav.Link>About</Nav.Link>
            {!props.user ? (
              <>
                <Button id="btn-sign-up" onClick={handleShowSignUpModal}>
                  Sign Up
                </Button>

                <Button id="btn-login" onClick={handleShowLoginModal}>
                  Login
                </Button>
              </>
            ) : (
              <>
                <NavDropdown
                  id="btn-logged-user"
                  alignRight
                  title={props.user.nombre}
                  className="btn btn-sm d-inline-block"
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

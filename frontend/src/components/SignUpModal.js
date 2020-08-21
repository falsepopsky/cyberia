import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const SignUpModal = (props) => {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUserNameChange = (event) => {
    setNombreUsuario(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSave = async function SignUp() {
    const API_URL_SIGNUP = 'http://localhost:8888/api/auth/signup';
    const formData = new FormData();

    formData.append('nombreUsuario', nombreUsuario);
    formData.append('email', email);
    formData.append('password', password);

    let response = await fetch(API_URL_SIGNUP, {
      method: 'POST',
      body: formData,
      credentials: 'include',
    });

    let data = await response.json();
    if (data.status === 'ok') {
      Swal.fire({
        text: data.message,
        icon: 'success',
        scrollbarPadding: false,
      });
      props.handleHide();
    } else {
      Swal.fire({
        title: 'Error!',
        text: data.message,
        icon: 'error',
        scrollbarPadding: false,
      });
    }
  };

  return (
    <Modal show={props.show} onHide={props.handleHide} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Create account</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            <FontAwesomeIcon color="black" icon={faUser} /> User
          </Form.Label>

          <Col sm={9}>
            <Form.Control
              type="text"
              value={nombreUsuario}
              onChange={handleUserNameChange}
              maxLength="13"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            <FontAwesomeIcon color="black" icon={faEnvelope} /> Email
          </Form.Label>

          <Col sm={9}>
            <Form.Control
              type="email"
              value={email}
              onChange={handleEmailChange}
              maxLength="29"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            <FontAwesomeIcon color="black" icon={faLock} /> Password
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="password"
              value={password}
              onChange={handlePasswordChange}
              minLength="5"
              maxLength="15"
            />
          </Col>
        </Form.Group>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleHide}>
          Cancel
        </Button>

        <Button variant="primary" onClick={handleSave}>
          Sign Up
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SignUpModal;

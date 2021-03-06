import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const LoginModal = (props) => {
  const [values, setValues] = useState({ user: '', password: '' });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleLoginClick = async function logIn() {
    let url = 'http://localhost:8888/api/auth';
    let params = {
      user: values.user,
      password: values.password,
    };

    let response = await fetch(url, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    let data = await response.json();
    if (data.status === 'ok') {
      props.handleLoginSuccess(data.usuarioLogueado);
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
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            <FontAwesomeIcon color="black" icon={faUser} /> User
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              value={values.user}
              onChange={handleChange('nombreUsuario')}
              maxLength="13"
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
              value={values.password}
              onChange={handleChange('password')}
              minLength="5"
              maxLength="15"
            />
          </Col>
        </Form.Group>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleHide}>
          Close
        </Button>

        <Button variant="primary" type="submit" onClick={handleLoginClick}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;

import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

const ContactForm = () => {
  const [values, setValues] = useState({ name: '', email: '', message: '' });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    const API_URL_CONTACT = 'http://localhost:8888/api/contacto';

    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('message', values.message);

    let response = await fetch(API_URL_CONTACT, {
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
      setValues({ name: '', email: '', message: '' });
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
    <Form>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={values.name}
              onChange={handleChange('name')}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={values.email}
              onChange={handleChange('email')}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              value={values.message}
              onChange={handleChange('message')}
            />
          </Form.Group>

          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default ContactForm;

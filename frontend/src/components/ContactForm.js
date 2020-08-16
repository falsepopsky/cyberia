import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

const ContactForm = () => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const handleContactName = (event) => {
    setContactName(event.target.value);
  };

  const handleContactEmail = (event) => {
    setContactEmail(event.target.value);
  };

  const handleContactMessage = (event) => {
    setContactMessage(event.target.value);
  };

  const handleSubmit = async function () {
    const formData = new FormData();
    let url = 'http://localhost:8888/api/contact/';

    formData.append('contactName', contactName);
    formData.append('contactEmail', contactEmail);
    formData.append('contactMessage', contactMessage);
    console.log(formData);

    let response = await fetch(url, {
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
              value={contactName}
              onChange={handleContactName}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={contactEmail}
              onChange={handleContactEmail}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              value={contactMessage}
              onChange={handleContactMessage}
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

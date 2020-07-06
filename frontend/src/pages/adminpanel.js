import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import AdminCover from '../images/undraw_control_panel1_20gm.svg';
import EventsCover from '../images/undraw_events_2p66.svg';
import MusicCover from '../images/undraw_compose_music_ovo2.svg';

const adminPanel = () => {
  return (
    <>
      <Row className="m-4">
        <Col
          sm={{ span: 6, offset: 2 }}
          md={{ span: 8, offset: 2 }}
          lg={{ span: 9, offset: 2 }}
          className="mt-5 text-center align-items-stretch justify-content-center"
        >
          <Card style={{ maxWidth: '950px' }}>
            <Card.Header as="h2"> Welcome to the admin panel</Card.Header>

            <Card.Body>
              <Card.Img
                variant="top"
                src={AdminCover}
                alt="admin cover"
                style={{ maxWidth: '900px', height: '400px' }}
              />
            </Card.Body>
            <Card.Footer>
              <Card.Text>
                Here you can create, read, update and delete posts from the
                store or venue.
              </Card.Text>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      <Row className="m-4">
        <Col
          sm={{ span: 6, offset: 1 }}
          md={{ span: 8, offset: 2 }}
          lg={{ span: 4, offset: 2 }}
          className="mt-5 text-center align-items-stretch justify-content-center"
        >
          <Card style={{ maxWidth: '400px' }}>
            <Card.Header as="h3"> Event panel section</Card.Header>

            <Card.Body>
              <Card.Img
                variant="top"
                src={EventsCover}
                alt="event cover"
                style={{ maxWidth: '350px', height: '400px' }}
              />
              <Link
                to="/store"
                className="nav-link btn btn-info btn-sm d-inline-block"
                rel="noopener noreferrer"
              >
                Go{' '}
              </Link>
            </Card.Body>

            <Card.Footer>
              <Card.Text>
                Here you can create, read, update and delete posts from events.
              </Card.Text>
            </Card.Footer>
          </Card>
        </Col>
        <Col
          sm={{ span: 6, offset: 1 }}
          md={{ span: 8, offset: 2 }}
          lg={{ span: 4, offset: 1 }}
          className="mt-5 text-center align-items-stretch justify-content-center"
        >
          <Card style={{ maxWidth: '400px' }}>
            <Card.Header as="h3">Music panel section</Card.Header>

            <Card.Body>
              <Card.Img
                variant="top"
                src={MusicCover}
                alt="music cover"
                style={{ maxWidth: '350px', height: '400px' }}
              />
              <Link
                to="/tabla"
                className="nav-link btn btn-info btn-sm d-inline-block"
                rel="noopener noreferrer"
              >
                Go
              </Link>
            </Card.Body>

            <Card.Footer>
              <Card.Text>
                Here you can create, read, update and delete posts from the
                store.
              </Card.Text>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default adminPanel;

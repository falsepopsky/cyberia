import React from 'react';
import StoreCarrousel from './StoreCarrousel';
import MusicaListado from './MusicaListado';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Store = () => {
    return (
        <Row className="m-4">
            <Col>
                <StoreCarrousel />
                <MusicaListado />
            </Col>
        </Row>
    )
};

export default Store;
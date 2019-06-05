import React from 'react';
import { Container, Col, Row } from 'reactstrap';

const DirectoryFooter = () =>
  <footer className={`bg-primary text-white py-4`} >
    <Container fluid>
      <Row>
        <Col md="6" className={`text-center text-md-left my-auto`}>
          <p className={`small mb-0`}>
            <i className={`fas fa-map-marker-alt mr-2`}></i>
            337 Gore Avenue, Vancouver BC, V6A 2Z3
          </p>
        </Col>
        <Col md="6" className={`text-center text-md-right my-auto`}>
          <p className={`small mb-0`}>© Buy Social Canada 2019. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>

export default DirectoryFooter

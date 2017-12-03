import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navigation.css';

const Navigation = () => (
  <Row className="navBar">
    <Col className="first" lg={4}>
      <Link className="navItem" to="/tickets">
        TICKETS
      </Link>
      <Link className="navItem" to="/lineup">
        LINEUP
      </Link>
      <Link className="navItem" to="/schedule">
        SCHEDULE
      </Link>
    </Col>
    <Col className="center" lg={4}>
      <Link to="/">HOME</Link>
    </Col>
    <Col className="last" lg={4}>
      <Link className="navItem" to="/myTrip">
        PLAN YOUR TRIP
      </Link>
      <Link className="navItem" to="/getInvolved">
        GET INVOLED
      </Link>
      <Link className="navItem" to="/news">
        NEWS
      </Link>
    </Col>
  </Row>
);

export default Navigation;

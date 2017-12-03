import React from 'react';
import { Col } from 'react-bootstrap';
import './footerCard.css';

const FooterCard = ({ children, title }) => (
  <Col className="footerCard" lg={4}>
    <Col className="footerCardTitle" lg={12}>
      <strong>{title}</strong>
    </Col>
    <Col className="footerCardAction" lg={12}>{children}</Col>
  </Col>
);

export default FooterCard;

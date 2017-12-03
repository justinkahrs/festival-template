import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Button, Row } from 'react-bootstrap';
import FooterBottom from './FooterBottom';
import FooterCard from './FooterCard';
import './footer.css';

const Footer = () => (
  <Row className="footer">
    <Col className="footerActions" lg={12}>
      <FooterCard title="Be part of the show">
        <Link className="btn btn-primary" to="/getInvolved">
          Learn how to get involved
        </Link>
      </FooterCard>
      <FooterCard title="Get in the know">
        <input placeholder="Your email here" type="text" />
        <Button>Join</Button>
      </FooterCard>
      <FooterCard title="From out of town?">
        <Link className="btn btn-primary" to="/myTrip">
          Plan your 2017 Lotus Fest trip
        </Link>
      </FooterCard>
    </Col>
    <FooterBottom />
  </Row>
);

export default Footer;

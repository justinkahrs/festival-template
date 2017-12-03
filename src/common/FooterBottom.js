import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import './footerBottom.css';

const FooterBottom = () => (
  <Col className="footerBottom" lg={12}>
    <Col lg={4}>
      <div className="footerSocial">Social Media Icons</div>
    </Col>
    <Col lg={4}>
      <div className="footerLogo">Logo Here</div>
    </Col>
    <Col lg={4}>
      <div className="footerHQLink">Festival HQ Address</div>
    </Col>
    <Col lg={12}>
      <ul className="footerNav">
        <li>
          <Link to="/about">ABOUT FESTIVAL</Link>
        </li>
        <li>
          <Link to="/festivalImpact">FESTIVAL IMPACT REPORT</Link>
        </li>
        <li>
          <a href="http://www.lotusfest.org/">FESTIVAL FOUNDATION</a>
        </li>
        <li>
          <Link to="/press">PRESS &amp; MEDIA TOOLKIT</Link>
        </li>
        <li>
          <Link to="/sponsors">SPONSORS</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </Col>

    <div>Copyright &#169; 2017 </div>
  </Col>
);
export default FooterBottom;

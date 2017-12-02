import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <Row>
    <nav className="center">
      <ul>
        <li>
          <Link to="/tickets">TICKETS</Link>
        </li>
        <li>
          <Link to="/lineup">LINEUP</Link>
        </li>
        <li className="middle-left">
          <Link to="/schedule">SCHEDULE</Link>
        </li>
        <li className="middle">
          <Link to="/">HOME</Link>
        </li>
        <li className="middle-right">
          <Link to="/myTrip">PLAN YOUR TRIP</Link>
        </li>
        <li>
          <Link to="/getInvolved">GET INVOLED</Link>
        </li>
        <li>
          <Link to="/news">NEWS</Link>
        </li>
      </ul>
    </nav>
  </Row>
);

export default Navigation;

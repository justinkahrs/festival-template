import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Grid, Row } from 'react-bootstrap';
import Navigation from './Navigation';

import './App.css';

const Home = () => <div>Home</div>;
const Tickets = () => <div>Tickets</div>;
const Lineup = () => <div>Lineup</div>;
const Schedule = () => <div>Schedule</div>;
const MyTrip = () => <div>My Trip</div>;
const GetInvolved = () => <div>Get Involved</div>;
const News = () => <div>News</div>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <Grid>
          <Navigation />
          <Row>
            <Route exact path="/" component={Home} />
            <Route exact path="/tickets" component={Tickets} />
            <Route exact path="/lineup" component={Lineup} />
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/myTrip" component={MyTrip} />
            <Route exact path="/getInvolved" component={GetInvolved} />
            <Route exact path="/news" component={News} />
          </Row>
        </Grid>
      </Router>
    );
  }
}

export default App;

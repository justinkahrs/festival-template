import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Grid, Row } from 'react-bootstrap';
import Navigation from './Navigation';
import Home from './pages/Home';
import Tickets from './pages/Tickets';
import Lineup from './pages/Lineup';
import Schedule from './pages/Schedule';
import MyTrip from './pages/MyTrip';
import GetInvolved from './pages/GetInvolved';
import News from './pages/News';
import './App.css';

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

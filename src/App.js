import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Grid, Row } from 'react-bootstrap';
import Navigation from './common/Navigation';
import FestivalImpact from './pages/FestivalImpact';
import About from './pages/About';
import Home from './pages/Home';
import Tickets from './pages/Tickets';
import Lineup from './pages/Lineup';
import Schedule from './pages/Schedule';
import MyTrip from './pages/MyTrip';
import GetInvolved from './pages/GetInvolved';
import News from './pages/News';
import Footer from './common/Footer';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';

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
          <Row className="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/festivalImpact" component={FestivalImpact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/tickets" component={Tickets} />
            <Route exact path="/lineup" component={Lineup} />
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/myTrip" component={MyTrip} />
            <Route exact path="/getInvolved" component={GetInvolved} />
            <Route exact path="/news" component={News} />
          </Row>
          <Footer />
        </Grid>
      </Router>
    );
  }
}

export default App;

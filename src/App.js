import React, { Component } from 'react';
import './App.css';
import Frontpage from './components/Frontpage/Frontpage';
import TodaysPhoto from './components/TodaysPhoto/TodaysPhoto';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/Frontpage/NavBar';
import test from './components/Frontpage/test';
import Archived from './components/ArchivedPhotos/Archived';
import MemberArea from './components/Memberarea/MemberArea';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Frontpage}></Route>
            <Route path="/photo-today" component={TodaysPhoto}></Route>
            <Route path="/archived-photos" component={Archived}></Route>
            <Route path="/test" component={test}></Route>
            <Route path="/member-area" component={MemberArea}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

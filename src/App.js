import React, { Component } from 'react';
import './App.css';
import Frontpage from './components/Frontpage/Frontpage';
import TodaysPhoto from './components/TodaysPhoto/TodaysPhoto';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/Frontpage/NavBar';
import test from './components/Frontpage/test';
import kielitesti from './components/Frontpage/kielitesti';
import Archived from './components/ArchivedPhotos/Archived';
import MemberArea from './components/Memberarea/MemberArea';
import MemberIn from './components/Memberarea/MemberIn';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Frontpage}></Route>
            <Route exact path="/kielitesti" component={kielitesti}></Route>
            <Route path="/photo-today" component={TodaysPhoto}></Route>
            <Route path="/archived-photos" component={Archived}></Route>
            <Route path="/test" component={test}></Route>
            <Route path="/member-area" component={MemberArea}></Route>
            <Route path="/member/in" component={MemberIn}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

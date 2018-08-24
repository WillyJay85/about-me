import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './homepage'
import WorkHistoryPage from './WorkHistoryPage'

import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <Router>
          <Switch>
            

            <Route exact path="/" component={HomePage} />
            <Route path="/work-history" component={WorkHistoryPage} />
          </Switch>
        </Router>

      </div>



    );
  }
}

export default App;

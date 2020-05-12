import React, {Component} from 'react';
import {Provider} from 'react-redux'
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from './store'
import Feedback from './components/Feedback';


class App extends Component {
  render(){
  return (
    <Provider store={store}>
      <Router>
      <Navbar/>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/feedback" component={Feedback} />
      </Router>
    </Provider>
  );
  }
}

export default App;

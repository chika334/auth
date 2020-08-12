import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import store from './store'

// Component
import NavBar from './component/NavBar';

// action
import {loadUser} from './action/userAction'

// pages
import Signin from './pages/signin';
import Signup from './pages/signup';
import MusicUpload from './pages/MusicUpload';
import Loading from './component/loader'

class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser())
  }
  render() {
    return (
      <Provider store={store}>
        <NavBar />
        <Switch>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/music" component={MusicUpload} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path={'/loading'} component={Loading} />
        </Switch>
      </Provider>
    );
  }
}

export default App;

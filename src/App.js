import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Login from "./components/Login";
import Register from "./components/Register";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    return (
        <div>
          <Header isLoggedIn={this.state.isLoggedIn} />
                <Switch>
              <Route path="/" render={()=><Main isLoggedIn={this.state.isLoggedIn}/>} exact />
              <Route path="/login" component={Login} />
              <Route path="/users/new" component={Register} />
                </Switch>
          <Footer />
        </div>
    );
  }
}

export default App;

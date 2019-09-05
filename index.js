import React, { Component } from 'react';
import { render } from 'react-dom';

import AuthContext from './context/AuthContext'; 
import AuthPage from './pages/Auth';
import Posts from './pages/Posts';

import MainNavigation from './components/Navigation/MainNavigation';


import './style.css';

class App extends Component {
  state = {
      token: null,
      user: null
  };

  login = (user, token) => {
    this.setState({ 
      user: user, 
      token: token 
    });
  }

  logout = () => { 
    this.setState({ 
      user: null, 
      token: null 
    });
  }
  render() {
    return (
      <AuthContext.Provider value={{
        user: this.state.user,
        token: this.state.token,
        login: this.login,
        logout: this.logout
      }}>
        <MainNavigation />
        <AuthPage />
        {this.state.token && <Posts />}
      </AuthContext.Provider>
    );
  }
}

render(<App />, document.getElementById('root'));

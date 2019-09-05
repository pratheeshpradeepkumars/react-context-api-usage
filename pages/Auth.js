import React from "react";

import AuthContext from '../context/AuthContext';

class AuthPage extends React.Component {

  static contextType = AuthContext; 
  
  constructor(props) {
    super(props);
  }

  loginHandler = () => {
    this.context.login(
      'jhondoe@xyz.com', 'abcdefghijklmnopqrstuvwxyz1234567890'
    );
  } 

  render() {
    return (
      <div className="login">
        {!this.context.token &&
          <button onClick={this.loginHandler}>Login</button> 
        }
        { this.context.token && 
          <div>
            <h3>User : {this.context.user}</h3>
            <p>Token : {this.context.token}</p>
          </div>
        }
      </div>
    )
  }
}

export default AuthPage;
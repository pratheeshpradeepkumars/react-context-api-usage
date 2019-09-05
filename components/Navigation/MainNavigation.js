import React from "react";

import AuthContext from '../../context/AuthContext';

const MainNavigation = () => {
  return (
   <AuthContext.Consumer>
    {context => {
      return(<div className="nav">
        <h2>Blogger Log</h2>
        {context.token &&
          <button className="logout-btn" onClick={context.logout}>Logout</button>
        }
      </div>
      )
    }}
    </AuthContext.Consumer>
  )
};

export default MainNavigation;
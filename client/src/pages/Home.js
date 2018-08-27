import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    // <div className="container">
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4 center blue-text text-lighten-2">Developer Connector</h1>
                <p className="blue-text flow-text center text-lighten-2">
                  {' '}
                  Create a developer profile, share posts and get help
                  from other developers
                </p>
              </div>
                <div className="blue lighten-1 divider" style={{marginBottom:'10px'}}></div>
                <div className="row">
                <Link to="/register" style={{fontWeight:'bold'}} className="col s6 m4 l4 offset-s6 btn blue-text text-darken-4">
                  Sign Up
                </Link>
                <div className="col s6 m4 l4 offset-s6">
                <span className="flow-text">
                </span>
                </div>
                <Link to="/login" style={{fontWeight:'bold'}} className="col s6 m4 l4 offset-s6 btn blue-text text-darken-4">
                  Login
                </Link>

                </div>
                
            </div>
          </div>
        </div>
      </div>
    // </div>
  )
}
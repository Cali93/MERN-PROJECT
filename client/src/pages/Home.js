import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="container">
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4 center">Developer Connector</h1>
                <p className="lead">
                  {' '}
                  Create a developer profile/portfolio, share posts and get help
                  from other developers
                </p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2 center left">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light center right">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
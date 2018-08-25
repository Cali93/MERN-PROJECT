import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: '',
    remember: '',
    errors: {}
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email : this.state.email,
      password: this.state.password
    }
    console.log(user, this.state);
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.type === 'checkbox' ? (e.target.checked) : (e.target.value)
    })
  }

  render() {
    return (
      <div>
        <h4 className="center">Login</h4>
        <div id="user-login" className="row">
          <div className="col s12 z-depth-6 card-panel">
            <form onSubmit={this.handleSubmit} className="login-htmlForm">
              <div className="row margin">
                <div className="input-field col s12">
                <i className="mdi-communication-email prefix"></i>
                <input id="user_email" type="email" name="email" className="validate" value={this.state.email} onChange={this.handleChange}/>
                <label htmlFor="user_email" className="center-align">Email</label>
                </div>
              </div>
              <div className="row margin">
                <div className="input-field col s12">
                  <i className="mdi-action-lock-outline prefix"></i>
                  <input id="user_pass" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <div className="row">          
                <div className="input-field col s12 m12 l12  login-text">
                  <label  htmlFor="remember-me">
                  <input  type="checkbox" id="remember-me" name="remember" value={this.state.remember} onChange={this.handleChange} />
                    <span>Remember me</span>
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <button className="btn waves-effect waves-light col s12">Login</button>
                </div>
              </div>
              <div className="row">
              <div className="input-field col s12">
                <p className="margin center medium-small sign-up">Don't have an account yet ?<Link to="/register"><button className="btn">Register</button></Link></p>
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default Login;

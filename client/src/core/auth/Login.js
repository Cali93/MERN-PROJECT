import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
// import classnames from 'classnames';
import TextFieldGroup from '../../common/textFieldGroup';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

class Login extends Component {
  state = {
    email: '',
    password: '',
    remember: '',
    errors: {}
  }

  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push('/dashboard');
    }
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.auth.isAuthenticated){
      this.props.history.push('/dashboard');
    }
    if(nextProps.errors){
      this.setState({errors: nextProps.errors});
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email : this.state.email,
      password: this.state.password
    }
    console.log(userData, this.state);
    this.props.loginUser(userData);
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.type === 'checkbox' ? (e.target.checked) : (e.target.value)
    })
  }

  render() {
    const { errors } =  this.state;

    return (
      <div>
        <div className="waveWrapper waveAnimation">
          <div className="waveWrapperInner bgTop">
            <div className="wave waveTop"></div>
          </div>
          <div className="waveWrapperInner bgMiddle">
            <div className="wave waveMiddle"></div>
          </div>
          <div className="waveWrapperInner bgBottom">
            <div className="wave waveBottom"></div>
          </div>
        </div>
        <h4 className="center blue-text text-lighten-3">LOGIN</h4>
        <div id="user-login" className="row">
          <div className="col s12 z-depth-6 card-panel">
            <form onSubmit={this.handleSubmit} className="login-htmlForm">
              <div className="row margin">
                <div className="input-field col s12">
                <i className="mdi-communication-email prefix"></i>
                <TextFieldGroup id="user_email" label="Email" type="email" name="email" value={this.state.email} onChange={this.handleChange} error={errors.email}/>
                {/* <label htmlFor="user_email" className="center-align">Email</label> */}
                </div>
              </div>
              <div className="row margin">
                <div className="input-field col s12">
                  <i className="mdi-action-lock-outline prefix"></i>
                  <TextFieldGroup id="user_pass" type="password" label="Password" name="password" value={this.state.password} onChange={this.handleChange} error={errors.password}/>
                  {/* <label htmlFor="password">Password</label> */}
                </div>
              </div>
              <div className="row">          
                <div className="input-field col s12 m12 l12  login-text">
                  {/* <TextFieldGroup  type="checkbox" label="rember-me" id="remember-me" name="remember" value={this.state.remember} onChange={this.handleChange} /> */}
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <Button onClick={this.handleSubmit} variant="contained" color="secondary">Login</Button>
                </div>
              </div>
              <div className="row">
              <div className="input-field col s12">
                <div className="margin center medium-small sign-up">Don't have an account yet ?
                <Divider />
                <Link to="/register"><Button variant="contained" color="primary">Register</Button></Link>
                </div>
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, {loginUser})(Login);

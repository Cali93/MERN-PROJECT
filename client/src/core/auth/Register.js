import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import TextFieldGroup from '../../common/textFieldGroup';
import { Button } from '../../../node_modules/@material-ui/core';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {}
  }

  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({errors: nextProps.errors})
    }
  }

  handleSubmit = (e) => {
    const newUser = {
      name : this.state.name,
      email : this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }
    // console.log(newUser);

    this.props.registerUser(newUser, this.props.history);
    
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render() {

    const { errors } = this.state;

    // const { user } = this.props.auth;

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
        <h4 className="center blue-text text-lighten-3">REGISTER</h4>
      <div id="register-page" className="row">
        <div className="col s12 z-depth-6 card-panel">
          <form onSubmit={this.handleSubmit} className="register-form">        
            <div className="row margin">
              <div className="input-field col s12">

                <TextFieldGroup label="Username" id="user_name" type="text" className={classnames('validate', {'invalid': errors.name})} name="name" value={this.state.name} onChange={this.handleChange}/>
              </div>
            </div>
            <div className="row margin">
              <div className="input-field col s12">

                <TextFieldGroup label="Email" id="user_email" type="email" name="email" className={classnames('validate', {'invalid': errors.email})} value={this.state.email} onChange={this.handleChange}/>
              </div>
            </div>
            <div className="row margin">
              <div className="input-field col s12">

                <TextFieldGroup label="Password" id="user_passw" type="password" name="password" className={classnames('validate', {'invalid': errors.password})} value={this.state.password} onChange={this.handleChange}/>
              </div>
            </div>
            <div className="row margin">
              <div className="input-field col s12">

                <TextFieldGroup label="Confirm Password" id="confirm_pass" type="password" name="password2" className={classnames('validate', {'invalid': errors.password2})} value={this.state.password2} onChange={this.handleChange}/>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <Button onClick={this.handleSubmit} variant="contained" color="secondary">Register</Button>
              </div>
              <div className="input-field col s12">
                <div className="margin center medium-small sign-up">Already have an account? 
                <div className="divider"></div>
                <Link to="/login"><Button variant="contained" color="primary">Login</Button></Link>
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

 Register.propTypes = {
   registerUser: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired,
   errors: PropTypes.object.isRequired
 }

 const mapStateToProps = (state) => ({
   auth: state.auth, // now can access it by this.props.auth
   errors: state.errors // now can access it by this.props.errors
 });

export default connect(mapStateToProps, { registerUser })(withRouter(Register));

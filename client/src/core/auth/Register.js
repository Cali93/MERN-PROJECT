import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

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
    e.preventDefault();
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
       <h4 className="center">Register</h4>	
      <div id="register-page" className="row">
        <div className="col s12 z-depth-6 card-panel">
          <form onSubmit={this.handleSubmit} className="register-form">        
            <div className="row margin">
              <div className="input-field col s12">
                <i className="mdi-social-person-outline prefix"></i>
                <input id="user_name" type="text" className={classnames('validate', {'invalid': errors.name})} name="name" value={this.state.name} onChange={this.handleChange}/>
                {errors.name && (<span className="red-text text-darken-2 input-aligned">{errors.name}</span>)}
                <label htmlFor="user_name" className="center-align">Username</label>
              </div>
            </div>
            <div className="row margin">
              <div className="input-field col s12">
                <i className="mdi-communication-email prefix"></i>
                <input id="user_email" type="email" name="email" className={classnames('validate', {'invalid': errors.email})} value={this.state.email} onChange={this.handleChange}/>
                {errors.email && (<span className="red-text text-darken-2 input-aligned">{errors.email}</span>)}
                <label htmlFor="user_email" className="center-align">Email</label>
              </div>
            </div>
            <div className="row margin">
              <div className="input-field col s12">
                <i className="mdi-action-lock-outline prefix"></i>
                <input id="user_passw" type="password" name="password" className={classnames('validate', {'invalid': errors.password})} value={this.state.password} onChange={this.handleChange}/>
                {errors.password && (<span className="red-text text-darken-2 input-aligned">{errors.password}</span>)}
                <label htmlFor="user_passw">Password</label>
              </div>
            </div>
            <div className="row margin">
              <div className="input-field col s12">
                <i className="mdi-action-lock-outline prefix"></i>
                <input id="confirm_pass" type="password" name="password2" className={classnames('validate', {'invalid': errors.password2})} value={this.state.password2} onChange={this.handleChange}/>
                <label htmlFor="confirm_pass">Re-type password</label>
                {errors.password2 && (<span className="red-text text-darken-2 input-aligned">{errors.password2}</span>)}
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <button className="btn waves-effect waves-light col s12" type="submit">Register Now</button>
              </div>
              <div className="input-field col s12">
                <p className="margin center medium-small sign-up">Already have an account? <Link to="/login"><button className="btn">Login</button></Link></p>
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

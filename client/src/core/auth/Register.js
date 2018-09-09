import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import TextFieldGroup from '../../common/textFieldGroup';
import { Button } from '../../../node_modules/@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import {PaperHeader} from '../../common/PaperHeader';
import GridContainer from '../../common/GridContainer';
import GridItem from '../../common/GridItem';

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
    const styles = {
      marginTopBot: {
        marginTop: '15px',
        marginBottom: '15px'
      }
    }

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
        <PaperHeader title="Register" blob="Join the community and contribute"/>
        <div id="user-register">
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Paper>
                <div >
                  <form onSubmit={this.handleSubmit} className="login-htmlForm">
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={6}>
                        <i className="mdi-communication-email prefix"></i>
                        <TextFieldGroup
                          id="user_name"
                          label="Username"
                          type="text"
                          name="name"
                          value={this.state.name}
                          onChange={this.handleChange}
                          error={errors.name}/> {/* <label htmlFor="user_email" className="center-align">Email</label> */}
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <i className="mdi-communication-email prefix"></i>
                        <TextFieldGroup
                          id="user_email"
                          label="Email"
                          type="email"
                          name="email"
                          value={this.state.email}
                          onChange={this.handleChange}
                          error={errors.email}/> {/* <label htmlFor="user_email" className="center-align">Email</label> */}
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <i className="mdi-action-lock-outline prefix"></i>
                        <TextFieldGroup
                          id="user_pass"
                          type="password"
                          label="Password"
                          name="password"
                          value={this.state.password}
                          onChange={this.handleChange}
                          error={errors.password}/> {/* <label htmlFor="password">Password</label> */}
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <i className="mdi-action-lock-outline prefix"></i>
                        <TextFieldGroup
                          id="user_pass2"
                          type="password"
                          label="Confirm password"
                          name="password2"
                          value={this.state.password2}
                          onChange={this.handleChange}
                          error={errors.password2}/> {/* <label htmlFor="password">Password</label> */}
                      </GridItem>
                    </GridContainer>

                    <div style={{
                      textAlign: 'center'
                    }}>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                          <div style={styles.marginTopBot}>
                            <Button onClick={this.handleSubmit} variant="contained" color="secondary">Register</Button>
                          </div>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          <Divider/>
                          <small>Already have an account ?
                          </small>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          <div style={styles.marginTopBot}>
                            <Link to="/login">
                              <Button variant="contained" color="primary">Login</Button>
                            </Link>
                          </div>
                        </GridItem>
                      </GridContainer>
                    </div>
                  </form>
                </div>
              </Paper>
            </GridItem>
          </GridContainer>
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

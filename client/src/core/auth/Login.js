import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/authActions';
// import classnames from 'classnames';
import TextFieldGroup from '../../common/textFieldGroup';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import {PaperHeader} from '../../common/PaperHeader';
import GridContainer from '../../common/GridContainer';
import GridItem from '../../common/GridItem';
// import {Switcher} from '../../common/Switcher';

class Login extends Component {
  state = {
    email: '',
    password: '',
    remember: false,
    errors: {}
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this
        .props
        .history
        .push('/dashboard');
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this
        .props
        .history
        .push('/dashboard');
    }
    if (nextProps.errors) {
      this.setState({errors: nextProps.errors});
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    }
    console.log(userData, this.state);
    this
      .props
      .loginUser(userData);
  }

  // handleCheck = (e) => {   e.preventDefault();   this.setState({     remember:
  // !this.state.remember   }) }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.type === 'checkbox'
        ? (e.target.checked)
        : (e.target.value)
    })
  }

  render() {

    const {errors} = this.state;
    const styles = {
      marginTopBot: {
        marginTop: '15px',
        marginBottom: '15px'
      }
    }

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
        <PaperHeader title="LOGIN" blob="Enter the void"/>
        <div id="user-login">
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Paper>
                <div >
                  <form onSubmit={this.handleSubmit} className="login-htmlForm">
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
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
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
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
                    </GridContainer>

                    <div style={{
                      textAlign: 'center'
                    }}>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                          {/* <Switcher
                          label="Rember me"
                          id="remember-me"
                          name="remember"
                          checked={this.state.remember}
                          onChange={this.handleChange}/> */}
                          <div style={styles.marginTopBot}>
                            <Button onClick={this.handleSubmit} variant="contained" color="secondary">Login</Button>
                          </div>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          <Divider/>
                          <small>Don't have an account yet ?
                          </small>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          <div style={styles.marginTopBot}>
                            <Link to="/register">
                              <Button variant="contained" color="primary">Register</Button>
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
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({auth: state.auth, errors: state.errors});
export default connect(mapStateToProps, {loginUser})(Login);

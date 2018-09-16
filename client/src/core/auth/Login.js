import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/authActions';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import {Divider} from '@material-ui/core';

import GridContainer from '../../common/GridContainer';
import GridItem from '../../common/GridItem';
import Card from "../../common/Card/Card.jsx";
import CardBody from "../../common/Card/CardBody.jsx";
import CardHeader from "../../common/Card/CardHeader.jsx";
import CardFooter from "../../common/Card/CardFooter.jsx";
import CustomInput from "../../common/CustomInput/CustomInput.jsx";
import Button from "../../common/CustomButtons/Button.jsx"
import image from "../../assets/img/bg7.jpg";
import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx";

class Login extends Component {
  state = {
    email: '',
    password: '',
    remember: false,
    cardAnimaton: "cardHidden",
    errors: {}
  }

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
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
    const { classes } = this.props;

    return (
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>LOGIN</h4>
                      <div className={classes.socialLine}>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-twitter"} />
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-facebook"} />
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-google-plus-g"} />
                        </Button>
                      </div>
                    </CardHeader>
                    <p className={classes.divider}>Or Be Classical</p>
                    <CardBody>
                      <CustomInput
                        labelText="Email..."
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "email",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        error={errors.email}
                      />
                      <CustomInput
                        labelText="Password"
                        id="pass"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          )
                        }}
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        error={errors.password}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                    <GridContainer style={{textAlign:'center'}}>
                    <GridItem xs={12} sm={12} md={12}>
                    <Button onClick={this.handleSubmit} variant="contained" color="primary">Login</Button>

                    </GridItem>
                    <GridItem xs={12} sm={12} md={12} style={styles.marginTopBot}>
                          <Divider/>
                          <small>Don't have an account yet ?
                          </small>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          <div >
                            <Link to="/register">
                              <Button variant="contained" color="secondary">Register</Button>
                            </Link>
                          </div>
                        </GridItem>
                    </GridContainer>

                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          {/* <Footer whiteFont /> */}
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
export default connect(mapStateToProps, {loginUser})(withStyles(loginPageStyle)(Login));

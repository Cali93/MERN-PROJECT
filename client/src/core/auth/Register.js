import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Person from "@material-ui/icons/Person";
import {Divider} from '@material-ui/core';
import Button from "../../common/CustomButtons/Button.jsx"

import GridContainer from '../../common/GridContainer';
import GridItem from '../../common/GridItem';
import Card from "../../common/Card/Card.jsx";
import CardBody from "../../common/Card/CardBody.jsx";
import CardHeader from "../../common/Card/CardHeader.jsx";
import CardFooter from "../../common/Card/CardFooter.jsx";
import CustomInput from "../../common/CustomInput/CustomInput.jsx";
// import {Switcher} from '../../common/Switcher';
import image from "../../assets/img/bg7.jpg";
import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx";

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    cardAnimaton: "cardHidden",
    errors: {}
  }

  componentDidMount(){
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
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
          <div className={classes.regcontainer}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>REGISTER</h4>
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
                        labelText="Username"
                        id="name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Person className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        error={errors.name}
                      />
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
                        id="password"
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

                      <CustomInput
                        labelText="Confirm Password"
                        id="password2"
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
                        name="password2"
                        value={this.state.password2}
                        onChange={this.handleChange}
                        error={errors.password2}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                    <GridContainer style={{textAlign:'center'}}>
                    <GridItem xs={12} sm={12} md={12}>
                    <Button onClick={this.handleSubmit} variant="contained" color="primary">Register</Button>

                    </GridItem>
                    <GridItem xs={12} sm={12} md={12} style={styles.marginTopBot}>
                          <Divider/>
                          <small>Already have an account ?
                          </small>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          <div >
                            <Link to="/login">
                              <Button variant="contained" color="secondary">Login</Button>
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

export default connect(mapStateToProps, { registerUser })(withStyles(loginPageStyle)(withRouter(Register)));


import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {createProject} from '../../../actions/projectActions';

import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons
import Icon from "@material-ui/core/Icon";
import Work from "@material-ui/icons/Work";
import {Button} from '@material-ui/core';

// core components
import GridItem from "../../../common/GridItem";
import GridContainer from "../../../common/GridContainer";
import Card from "../../../common/Card/Card.jsx";
import CardBody from "../../../common/Card/CardBody.jsx";
import CardHeader from "../../../common/Card/CardHeader.jsx";
import CardFooter from "../../../common/Card/CardFooter.jsx";
import CustomInput from "../../../common/CustomInput/CustomInput.jsx";

import projectPageStyle from '../../../assets/jss/material-kit-react/views/projectPage';

class CreateProject extends Component {
  state = {
    name: '',
    description: '',
    customer: '',
    budget: '',
    errors: {}
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({errors: nextProps.errors})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      name: this.state.name,
      description: this.state.description,
      customer: this.state.customer,
      budget: this.state.budget
    }
    console.log(newProject);

    this
      .props
      .createProject(newProject, this.props.history);

  }

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
    const {classes} = this.props;

    return (
      <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
            <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form onSubmit={this.handleSubmit} className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>CREATE A NEW PROJECT</h4>
                    </CardHeader>
                    <CardBody>
                      <CustomInput
                        labelText="Project name"
                        id="name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Work className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        error={errors.name}
                      />
                      <CustomInput
                        labelText="Description"
                        id="description"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                              info_square
                              </Icon>
                            </InputAdornment>
                          )
                        }}
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        error={errors.description}
                      />
                      <CustomInput
                        labelText="Customer"
                        id="customer"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                              business
                              </Icon>
                            </InputAdornment>
                          )
                        }}
                        name="customer"
                        value={this.state.customer}
                        onChange={this.handleChange}
                        error={errors.customer}
                      />
                      <CustomInput
                        labelText="Budget"
                        id="budget"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                              attach_money
                              </Icon>
                            </InputAdornment>
                          )
                        }}
                        name="budget"
                        value={this.state.budget}
                        onChange={this.handleChange}
                        error={errors.budget}
                      />
                      
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                    <GridContainer style={{textAlign:'center'}}>
                    <GridItem xs={12} sm={12} md={12}>
                    <Button onClick={this.handleSubmit} variant="contained" color="secondary">CREATE PROJECT</Button>

                    </GridItem>
                    </GridContainer>

                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
              
            </GridItem>
          </GridContainer>
      </div>
    )
  }

}

CreateProject.propTypes = {
  createProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({project: state.project, errors: state.errors})

export default connect(mapStateToProps, {createProject})(withStyles(projectPageStyle)(withRouter(CreateProject)));

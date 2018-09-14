import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
// core components
import GridItem from "../../common/GridItem";
import GridContainer from "../../common/GridContainer";
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import CardHeader from '@material-ui/core/CardHeader';
// import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import WorkIcon from '@material-ui/icons/Work';

import FormHelperText from '@material-ui/core/FormHelperText';

import TextAreaFieldGroup from "../../common/TextAreaFieldGroup";
import TextFieldGroup from "../../common/textFieldGroup";
// import SelectList from '../../common/SelectList'; import avatar from
// "../../assets/img/marc.jpg";

import {createProject, getCurrentProject} from '../../actions/projectActions';

class CreateProject extends Component {
  state = {
    name: '',
    description: '',
    addTimeSheet: false,
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
      description: this.state.description
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
    const styles = {
      cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
      },
      cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
      },
      location: {
        fontSize: "14px"
      }
    };
    const {errors} = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardHeader
                  color="primary"
                  title="Create a new project"
                  subheader="Fields marked with * are required"></CardHeader>
                <CardContent>
                  <GridContainer>

                    <GridItem xs={12} sm={12} md={6}>
                      <TextFieldGroup
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                        label="* Name"
                        id="name"
                        formControlProps={{
                        fullWidth: true
                      }}
                        placeholder="* Project name"/>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                      <TextAreaFieldGroup
                        name="description"
                        onChange={this.handleChange}
                        value={this.state.description}
                        label="Description"
                        id="description"
                        formControlProps={{
                        fullWidth: true
                      }}/>
                    </GridItem>
                    </GridContainer>
                    <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <TextFieldGroup
                        name="beginsAt"
                        onChange={this.handleChange}
                        value={this.state.beginsAt}
                        label="Begins at"
                        id="beginsat"
                        formControlProps={{
                        fullWidth: true
                      }}/>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <TextFieldGroup
                        name="endsAt"
                        onChange={this.handleChange}
                        value={this.state.endsAt}
                        label="Ends at"
                        id="endsat"
                        formControlProps={{
                        fullWidth: true
                      }}/>
                    </GridItem>
                    <Button onClick={this.handleSubmit}>Update project</Button>
                  </GridContainer>
                </CardContent>
              </Card>
            </GridItem>
          </GridContainer>
        </form>
      </div>
    )
  }

}

CreateProject.propTypes = {
  createProject: PropTypes.func.isRequired,
  getCurrentProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({project: state.project, errors: state.errors})

export default connect(mapStateToProps, {createProject, getCurrentProject})(withRouter(CreateProject));

import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import TextAreaFieldGroup from '../../../common/TextAreaFieldGroup';
import TextFieldGroup from '../../../common/textFieldGroup';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import GridContainer from '../../../common/GridContainer';
import GridItem from '../../../common/GridItem';
import Button from '@material-ui/core/Button';
import PreviousButton from '@material-ui/icons/KeyboardArrowLeft';
import {Paper} from '@material-ui/core';
import DatePicker from '../../../common/DatePicker';
import {Switcher} from '../../../common/Switcher';
import { addEducation } from '../../../actions/profileActions';

class AddEducation extends Component {
  state = {
    school: '',
    degree: '',
    fieldOfStudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
    errors: {},
    disabled: false
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({
        errors:nextProps.errors
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const eduData = {
      school:this.state.school,
      degree:this.state.degree,
      fieldOfStudy:this.state.fieldOfStudy,
      from:this.state.from,
      to:this.state.to,
      current:this.state.current,
      description:this.state.description
    }
    console.log("edu data", eduData);
    this.props.addEducation(eduData, this.props.history);
  }
  componentDidUpdate(){
    console.log(this.state)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleCheck = (e) => {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    })
  }

  render() {

    const {errors} = this.state;

    return (
      <div className="add-education">
        <GridContainer></GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Paper
              style={{
              textAlign: 'center',
              color: 'white',
              backgroundColor: '#f50057'
            }}>
              <GridContainer>

                <GridItem xs={2} sm={2} md={2}>
                  <Link to="/dashboard">
                    <Button
                      style={{
                      marginTop: '25px'
                    }}
                      color="primary"
                      variant="extendedFab">
                      <PreviousButton/>Go Back
                    </Button>
                  </Link>
                </GridItem>
                <GridItem xs={10} sm={10} md={10}>
                  <div style={{
                    marginRight: '20%'
                  }}>
                    <h2>Add Education</h2>
                    <p>Add any school, bootcamp, course, workshop you attended</p>
                  </div>
                </GridItem>
              </GridContainer>
            </Paper>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Paper>
              <form onSubmit={this.handleSubmit}>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                    <TextFieldGroup
                      name="school"
                      label="School"
                      placeholder="School"
                      helperText="What was the name of the institution ?"
                      onChange={this.handleChange}
                      value={this.state.school}
                      error={errors.school}/>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                    <TextFieldGroup
                      name="degree"
                      label="Degree"
                      placeholder="Degree"
                      helperText="Any degree, certification, badge"
                      onChange={this.handleChange}
                      value={this.state.degree}
                      error={errors.degree}/>
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <DatePicker
                      name="from"
                      label="From"
                      placeholder="From"
                      helperText="When did you start ?"
                      onChange={this.handleChange}
                      value={this.state.from}
                      error={errors.from}/>
                  </GridItem>
                  <GridItem xs={12} sm={2} md={2}>
                    <Switcher
                      name="current"
                      label="Current"
                      helperText="Is this your current program ?"
                      onChange={this.handleCheck}
                      checked={this.state.current}
                      error={errors.current}/>
                  </GridItem>
                  <GridItem xs={12} sm={5} md={5}>
                    <DatePicker
                      name="to"
                      label="To"
                      placeholder="To"
                      helperText="When did you stop ?"
                      onChange={this.handleChange}
                      value={this.state.to}
                      error={errors.to}
                      disabled={this.state.disabled ? true:false}/>
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem xs={12} sm={8} md={8}>
                    <TextAreaFieldGroup
                      name="description"
                      label="Description"
                      placeholder="Description"
                      helperText="Explain what you did, what you learned and so on."
                      onChange={this.handleChange}
                      value={this.state.description}
                      error={errors.description}/>
                  </GridItem>
                  <GridItem xs={12} sm={4} md={4}>
                    <TextAreaFieldGroup
                      name="fieldOfStudy"
                      label="Field of Study"
                      placeholder="Field of Study"
                      helperText="In which field was it ?"
                      onChange={this.handleChange}
                      value={this.state.fieldOfStudy}
                      error={errors.fieldOfStudy}/>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <div style={{textAlign:'center', margin:'10px 0 10px 0'}}>
                    <Button variant="outlined" color="primary" onClick={this.handleSubmit}>Update experience</Button>
                    </div>
                  </GridItem>
                </GridContainer>
              </form>
            </Paper>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({profile: state.profile, errors: state.errors})

export default connect(mapStateToProps, {addEducation})(withRouter(AddEducation))

import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import TextAreaFieldGroup from '../../../common/TextAreaFieldGroup';
import TextFieldGroup from '../../../common/textFieldGroup';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import GridContainer from '../../../common/GridContainer';
import GridItem from '../../../common/GridItem';
import Button from '@material-ui/core/Button';
import {Paper} from '@material-ui/core';
import DatePicker from '../../../common/DatePicker';
import {Switcher} from '../../../common/Switcher';
import { addExperience } from '../../../actions/profileActions';
import { PaperHeader } from '../../../common/PaperHeader';

class AddExperience extends Component {
  state = {
    title: '',
    company: '',
    location: '',
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
    const expData = {
      company:this.state.company,
      title:this.state.title,
      from:this.state.from,
      to:this.state.to,
      current:this.state.current,
      description:this.state.description,
      location:this.state.location,
    }
    console.log("exp data",expData);
    this.props.addExperience(expData, this.props.history);
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
      <div className="add-experience">
      <PaperHeader title="Add Experience" blob="Add any job or position that you have had in the past or current" prevButton="Go Back" />
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Paper>
              <form onSubmit={this.handleSubmit}>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                    <TextFieldGroup
                      name="company"
                      label="Company"
                      placeholder="Company"
                      helperText="Where did you work ?"
                      onChange={this.handleChange}
                      value={this.state.company}
                      error={errors.company}/>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                    <TextFieldGroup
                      name="title"
                      label="Title"
                      placeholder="Title"
                      helperText="What was your function ?"
                      onChange={this.handleChange}
                      value={this.state.title}
                      error={errors.title}/>
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
                      helperText="Is this your current job ?"
                      onChange={this.handleCheck}
                      checked={this.state.current}
                      error={errors.current}/>
                  </GridItem>
                  <GridItem xs={12} sm={5} md={5}>
                    <DatePicker
                      name="to"
                      label="To"
                      placeholder="To"
                      helperText="Where did you stop ?"
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
                      helperText="Explain a daily day in this work, what you did, what you learned, etc"
                      onChange={this.handleChange}
                      value={this.state.description}
                      error={errors.description}/>
                  </GridItem>
                  <GridItem xs={12} sm={4} md={4}>
                    <TextAreaFieldGroup
                      name="location"
                      label="Location"
                      placeholder="Location"
                      helperText="Where were you working ?"
                      onChange={this.handleChange}
                      value={this.state.location}
                      error={errors.location}/>
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

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({profile: state.profile, errors: state.errors})

export default connect(mapStateToProps, {addExperience})(withRouter(AddExperience))

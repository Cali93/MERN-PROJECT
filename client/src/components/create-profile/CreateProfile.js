import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputGroup from '../../common/InputGroup';
// import TextFields from '../../common/TextFields';
import TextFieldGroup from '../../common/textFieldGroup';
// import classnames from 'classnames';
// import CustomInput from '../../common/CustomInput'

class CreateProfile extends Component {
  state = {
    displaySocialInputs: false,
    handle: '',
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
    errors: {}
  }

  handleSubmit = (e) => {
    // console.log('handleSubmit');
  }
  handleChange = (e) => {
    // console.log('handleSubmit');
  }

  render() {
    return (
      <div className="create-profile">
        <div className="container center">
          <div className="row">
            <div className="col m12">
              <h2 className="flow-text center-align">Create your profile</h2>
              <p className="center-align">
              Let's get some informations to make your profile stand out
              </p>
              <small className="center-align">* = required field</small>
            </div>
          </div>
          <div className="row">
            <div className="col m12">
            <TextFieldGroup id="handle" name="handle" label="Handle" value={this.state.handle} placeholder="your nickname" onChange={this.handleChange} />
            {/* <InputGroup id="handle" name="handle" value={this.state.handle} placeholder="your nickname" onChange={this.handleChange}/> */}
            </div>
          </div>
        </div>
      </div>
    )
  }

}

  CreateProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  }

  const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
  })

export default connect (mapStateToProps)(CreateProfile);

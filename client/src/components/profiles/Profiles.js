import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../../common/Spinner';
import { getProfiles } from '../../actions/profileActions';
import PropTypes from 'prop-types';
import { PaperHeader } from '../../common/PaperHeader';
import ProfileItem from './ProfileItem';
import { Divider } from '@material-ui/core';

class Profiles extends Component {

  componentDidMount() {
    this.props.getProfiles();
  }

  render() {

    const { profiles, loading } = this.props.profile;
    let profileItems;

    if (profiles === null || loading) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        profileItems = profiles.map(profile => (
          <div key={profile._id}>
            <ProfileItem key={profile._id} profile={profile} />
          </div>
        ));
      } else {
        profileItems = <PaperHeader title="No profile found..." blob="Try to refresh the page or verify your network"/>;
      }
    }
    return (
      <div className="profiles">
      <PaperHeader title="Developer Profiles" blob="Browse and connect with developers"/>
      {profileItems}
      </div>
    )
  }
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile:state.profile
})

export default connect(mapStateToProps, {getProfiles})(Profiles)

import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import ProfileInfos from './ProfileInfos';
import ProfileGithub from './ProfileGithub';
import Spinner from '../../../common/Spinner';
import {getProfileByHandle} from '../../../actions/profileActions';
import PreviousButton from '@material-ui/icons/KeyboardArrowLeft';
import {Button} from '@material-ui/core'

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this
        .props
        .getProfileByHandle(this.props.match.params.handle);
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.profile.profile === null && this.props.profile.loading){
      this.props.history.push('/not-found');
    }
  }
  render() {

    const {profile, loading} = this.props.profile;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner/>
    } else {
      profileContent = (
        <div>
          <Link to="/profiles">
            <Button
            style={{margin:'15px 0 15px 15px'}}
            color = "primary"
            variant = "extendedFab" ><PreviousButton/> Back to profiles
            </Button>
          </Link>

          <ProfileHeader profile={profile}/>
          
          <ProfileAbout profile={profile}/>

          <ProfileInfos education={profile.education} experience={profile.experience}/>

          {profile.githubusername ? (<ProfileGithub username={profile.githubusername}/>) : null}
        </div>
      )
    }

    return (
      <div>
        {profileContent}
      </div>
    )
  }
}

Profile.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, {getProfileByHandle})(Profile);

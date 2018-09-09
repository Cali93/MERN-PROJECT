import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../../common/Spinner';
import Button from '@material-ui/core/Button';
import GridContainer from '../../common/GridContainer';
import GridItem from '../../common/GridItem';
import DeleteIcon from '@material-ui/icons/Delete';
// import CircularProgress from '@material-ui/core/CircularProgress';
import {ProfileActions} from './ProfileActions';
import { PaperHeader } from '../../common/PaperHeader';
import { PaperHeaderLink } from '../../common/PaperHeaderLink';
import Experiences from './Experiences';
import Educations from './Educations';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteAccount = (e) => {
    this.props.deleteAccount();
  }

  render() {
    // get the user from auth state
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner/>;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <PaperHeaderLink title="Welcome" actionButton={`${user.name}`} actionLink={`/profile/${profile.handle}`}/>
            {/* <h4 className="lead text-muted">Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link></h4> */}
            <ProfileActions />
            {/*TODO EXP and EDU*/}
            <Experiences experience={profile.experience}/>
            <Educations education={profile.education}/>
            <div style={{margin:'15px 0 15px 0', textAlign:'center'}}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <Button variant="extendedFab" aria-label="Delete" color="secondary" onClick={this.onDeleteAccount}>
                    <DeleteIcon />
                    Delete My Account
                  </Button>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <PaperHeader title={`Welcome to your dashboard ${user.name}`} blob="You have not yet setup a profile, please add some info." actionLink="/create-profile" actionButton="Create Profile" paperColor="#f50057"/>
            {/* <h4 className="lead text-muted"></h4>
            <p className="flow-text">You have not yet setup a profile, please add some info</p>
            <Link to="/create-profile" className="btn">
              <Button variant="outlined" color="primary">Create Profile</Button>
            </Link> */}
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} >
        {/* <PaperHeader title="Dashboard"/> */}
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
        {dashboardContent}
        </GridItem>
      </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);

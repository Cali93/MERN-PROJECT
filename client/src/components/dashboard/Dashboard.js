import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            <h4 className="lead text-muted">Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link></h4>
            <ProfileActions />
            {/*TODO EXP and EDU*/}
            <div style={{marginBottom:'60px'}}>
              <Button variant="extendedFab" aria-label="Delete" color="secondary" onClick={this.onDeleteAccount}>
              <DeleteIcon />
               Delete My Account
              </Button>
            </div>
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <h4 className="lead text-muted">Welcome {user.name}</h4>
            <p className="flow-text">You have not yet setup a profile, please add some info</p>
            <Link to="/create-profile" className="btn">
              <Button variant="outlined" color="primary">Create Profile</Button>
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} >
        <h1 className="display-4">Dashboard</h1>
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

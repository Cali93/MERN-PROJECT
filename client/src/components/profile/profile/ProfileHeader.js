import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ProfileBanner} from '../../../common/ProfileBanner';
import {isEmpty} from '../../../utils/is-empty';
import GridContainer from '../../../common/GridContainer';
import GridItem from '../../../common/GridItem';
import {Paper, Divider} from '@material-ui/core';

class ProfileHeader extends Component {
  render() {
    const {profile} = this.props
    let profileContent = (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <div>
              <strong>{profile.status}</strong>
              {isEmpty(profile.company)
                ? null
                : (
                  <strong> at {profile.company}</strong>
                )}
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <div>{isEmpty(profile.location)
                ? null
                : (
                  <span>{profile.location}</span>
                )}</div>
          </GridItem>
        </GridContainer>
      </div>
    )
    return (
      <div style={{
        textAlign: "center"
      }}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Paper style={{
              backgroundColor: '#f50057'
            }}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <ProfileBanner
                    profile={profile}
                    paperColor="#3f51b5"
                    title={profile.user.name}
                    blob={profileContent}/> {/* actionButton="Follow" actionLink={`/profile/${profile.handle}`} */}
                </GridItem>
              </GridContainer>
            </Paper>
            <Divider/>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

ProfileHeader.propTypes = {
  profile: PropTypes.object.isRequired
}

export default ProfileHeader;
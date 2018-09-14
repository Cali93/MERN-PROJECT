import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {isEmpty} from '../../utils/is-empty';
import GridContainer from '../../common/GridContainer';
import GridItem from '../../common/GridItem';
import {Paper, Divider, Typography} from '@material-ui/core';
import {ProfileCard} from '../../common/ProfileCard';
import Chip from '@material-ui/core/Chip';
import {SubHeader} from '../../common/SubHeader';

class ProfileItem extends Component {
  render() {

    const {profile} = this.props;
    let profileContent = (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <div>{profile.status} {isEmpty(profile.company)
                ? null
                : (
                  <span>at {profile.company}</span>
                )}</div>
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
              margin: '15px 0'
            }}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <ProfileCard
                    paperColor="#F9A825"
                    title={profile.user.name}
                    blob={profileContent}
                    actionButton="View Profile"
                    actionLink={`/profile/${profile.handle}`}/>
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <SubHeader paperColor="#F9A825" title="Skills"/>
                      <div
                        className="list-group-item"
                        style={{
                        padding: '10px'
                      }}>
                        {profile
                          .skills
                          .slice(0, 10)
                          .map((skill, index) => (<Chip
                            key={index}
                            label={skill}
                            variant="outlined"
                            color="secondary"
                            style={{
                            margin: '2px 3px'
                          }}/>))}
                      </div>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <SubHeader paperColor="#F9A825" title={`About ${profile.user.name}`}/>
                      <div>
                        <Typography variant="subheading">
                          {profile.bio}
                        </Typography>
                      </div>
                    </GridItem>
                  </GridContainer>
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

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
}

export default ProfileItem
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GridContainer from '../../../common/GridContainer';
import GridItem from '../../../common/GridItem';
import {Paper, Divider} from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import {SubHeader} from '../../../common/SubHeader';
import {isEmpty} from '../../../utils/is-empty';

class ProfileAbout extends Component {
  render() {
    const {profile} = this.props;
    const skills = profile
      .skills
      .slice(0, 10)
      .map((skill, index) => (<Chip
        key={index}
        label={skill}
        variant="outlined"
        style={{
        margin: '2px 5px'
      }}
        color="secondary"/>))
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Paper style={{
              backgroundColor: '#e0e0e0',
              padding:'10px'
            }}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <SubHeader paperColor="#3f51b5" title={`About ${profile.user.name}`}/>
                  <GridItem xs={12} sm={12} md={12}>
                    <Paper style={{
                      padding: '8px'
                    }}>
                      <Typography variant="subheading" gutterBottom>
                        {isEmpty(profile.bio)
                          ? (<span>{`${profile.user.name} doesn't have a bio.`}</span>)
                          : (
                            <span>{profile.bio}</span>
                          )}
                      </Typography>
                    </Paper>
                  </GridItem>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <SubHeader paperColor="#3f51b5" title="Skills"/>
                  <GridItem xs={12} sm={12} md={12}>
                    <Paper style={{
                      padding: '5px'
                    }}>
                      <div className="list-group-item">
                        {skills}
                      </div>
                    </Paper>
                  </GridItem>
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

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
}

export default ProfileAbout

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Moment from 'react-moment';
import GridContainer from '../../../common/GridContainer';
import GridItem from '../../../common/GridItem';
import {Paper,Divider} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {SubHeader} from '../../../common/SubHeader';

class ProfileInfos extends Component {
  render() {
    const {experience, education} = this.props;
    const expItems = experience.map((exp, index) => (
      <div key={exp._id}>
        <Typography variant="title" gutterBottom>
          {exp.company}
        </Typography>
        <Typography variant="subheading" gutterBottom>
          <strong>{exp.title}</strong>
        </Typography>
        <Typography variant="body2" gutterBottom>
          {exp.description === ''
            ? null
            : (
              <strong>{exp.description}</strong>
            )}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <Moment format="DD/MM/YYYY">{exp.from}</Moment>
          <span>
            -
          </span>
          {exp.to === null
            ? ('Now')
            : (
              <Moment format="DD/MM/YYYY">{exp.to}</Moment>
            )}
        </Typography>

        <Typography variant="subheading" gutterBottom>
          {exp.location === ''
            ? null
            : (
              <span>{exp.location}</span>
            )}
        </Typography>
        {(experience.length - 1) > index
          ? (<Divider style={{
            margin: '8px 0'
          }}/>)
          : null}

      </div>
    ))

    const eduItems = education.map((edu, index) => (
      <div key={edu._id}>

        <Typography variant="title" gutterBottom>
          {edu.school}
        </Typography>
        <Typography variant="subheading" gutterBottom>
          <strong>{edu.fieldOfStudy} {edu.degree}</strong>
        </Typography>
        <Typography variant="subheading" gutterBottom>
          <strong></strong>
        </Typography>
        <Typography variant="body2" gutterBottom>
          {edu.description === ''
            ? null
            : (
              <strong>{edu.description}</strong>
            )}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <Moment format="DD/MM/YYYY">{edu.from}</Moment>
          <span>
            -
          </span>
          {edu.to === null
            ? ('Now')
            : (
              <Moment format="DD/MM/YYYY">{edu.to}</Moment>
            )}
        </Typography>
        {(education.length - 1) > index
          ? (<Divider style={{
            margin: '8px 0'
          }}/>)
          : null}
      </div>
    ))

    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Paper
              style={{
              backgroundColor: '#e0e0e0',
              padding: '10px'
            }}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <SubHeader paperColor="#F9A825" title="Experiences"/>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <Paper
                        style={{
                        padding: '8px',
                        margin: '5px 0',
                        textAlign: 'center'
                      }}>
                        {expItems.length > 0
                          ? (expItems)
                          : (
                            <p>No experience listed</p>
                          )
}
                      </Paper>
                    </GridItem>
                  </GridContainer>
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <SubHeader paperColor="#F9A825" title="Educations"/>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <Paper
                        style={{
                        padding: '8px',
                        margin: '5px 0',
                        textAlign: 'center'
                      }}>
                        {eduItems.length > 0
                          ? (eduItems)
                          : (
                            <p>No education listed</p>
                          )
}
                      </Paper>
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

ProfileInfos.propTypes = {
  education: PropTypes.array.isRequired,
  experience: PropTypes.array.isRequired
}

export default ProfileInfos
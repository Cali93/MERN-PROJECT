import React from 'react'
import Button from '@material-ui/core/Button';
import EducationIcon from '@material-ui/icons/Book';
import ExperienceIcon from '@material-ui/icons/Work';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import {Link} from 'react-router-dom';
import GridContainer from '../../common/GridContainer';
import GridItem from '../../common/GridItem';

export const ProfileActions = () => {
  return (
    <div style={{
      textAlign: 'center',
      marginTop: '15px'
    }}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={6} sm={4} md={4}>
              <Link to="/edit-profile">
                <Button variant="contained" color="secondary"><PersonPinIcon/>EDIT PROFILE</Button>
              </Link>
            </GridItem>
            <GridItem xs={6} sm={4} md={4}>
              <Link to="/add-experience">
                <Button variant="contained" color="secondary"><ExperienceIcon/>ADD EXPERIENCE</Button>
              </Link>
            </GridItem>
            <GridItem xs={6} sm={4} md={4}>
              <Link to="/add-education">
                <Button variant="contained" color="secondary"><EducationIcon/>ADD EDUCATION</Button>
              </Link>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>

    </div>
  )
}

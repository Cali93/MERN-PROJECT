import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import PreviousButton from '@material-ui/icons/KeyboardArrowLeft'
import GridContainer from './GridContainer';
import GridItem from './GridItem';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export const ProfileCard = ({title, blob, prevButton, actionButton, actionLink, textColor, paperColor}) => {
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Paper
            style={{
            textAlign: 'center',
            color: `${textColor}`,
            backgroundColor: `${paperColor}`
          }}>
            <GridContainer>
              <GridItem xs={2} sm={2} md={2}>
                <Link to="/dashboard">
                  {prevButton &&<Button
                    style={{
                    marginTop: '25px'
                  }}
                    color="primary"
                    variant="extendedFab">
                    <PreviousButton/>Go Back
                  </Button>}
                </Link>
              </GridItem>
              <GridItem xs={10} sm={10} md={10}>
                <div style={{
                  marginRight: '20%'
                }}>
                  <h2>{title}</h2>
                  <div>{blob}</div>
                  {actionButton && 
                  <Link to={actionLink}>
                    <Button
                    style={{margin:'15px 0 15px 0'}}
                    color="secondary"
                    variant="extendedFab">
                    {actionButton}
                  </Button>
                  </Link>}
                </div>
              </GridItem>
            </GridContainer>

          </Paper>
        </GridItem>
      </GridContainer>
    </div>
  )
}

ProfileCard.propTypes = {
  title: PropTypes.string.isRequired,
  blob:PropTypes.object,
  prevButton:PropTypes.string,
  actionButton:PropTypes.string,
  actionLink:PropTypes.string,
  textColor:PropTypes.string,
  paperColor:PropTypes.string
}

ProfileCard.defaultProps = {
  paperColor: '#f50057',
  textColor: 'white'
};
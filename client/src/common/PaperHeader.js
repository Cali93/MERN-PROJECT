import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import PreviousButton from '@material-ui/icons/KeyboardArrowLeft'
import GridContainer from './GridContainer';
import GridItem from './GridItem';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export const PaperHeader = ({title, blob, prevButton, prevLink, actionButton, actionLink, textColor, paperColor, paperMargin}) => {
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Paper
            style={{
            textAlign: 'center',
            color: `${textColor}`,
            margin:`${paperMargin}`,
            backgroundColor: `${paperColor}`
          }}>
            <GridContainer>
              <GridItem xs={2} sm={2} md={2}>
                
                  {prevButton &&
                  <Link to={prevLink}>
                  <Button
                    style={{
                    marginTop: '25px'
                  }}
                    color="primary"
                    variant="extendedFab">
                    <PreviousButton/>{prevButton}
                  </Button>
                  </Link>}
                
              </GridItem>
              <GridItem xs={10} sm={10} md={10}>
                <div style={{
                  marginRight: '20%'
                }}>
                  <h2>{title}</h2>
                  <p><strong>{blob}</strong></p>
                  {actionButton && 
                  <Link to={actionLink}>
                    <Button
                    style={{marginBottom:'15px'}}
                    color="primary"
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

PaperHeader.propTypes = {
  title: PropTypes.string.isRequired,
  blob:PropTypes.string,
  prevButton:PropTypes.string,
  prevLink:PropTypes.string,
  paperMargin:PropTypes.string,
  actionButton:PropTypes.string,
  actionLink:PropTypes.string,
  textColor:PropTypes.string,
  paperColor:PropTypes.string
}

PaperHeader.defaultProps = {
  paperColor: '#f50057',
  textColor: 'white',
  prevLink: '/dashboard'
};
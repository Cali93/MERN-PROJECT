import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import PreviousButton from '@material-ui/icons/KeyboardArrowLeft'
import GridContainer from './GridContainer';
import GridItem from './GridItem';
import {Link} from 'react-router-dom';

export const PaperHeaderLink = ({title, blob, prevButton, actionButton, actionLink}) => {
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Paper
            style={{
            textAlign: 'center',
            color: 'white',
            backgroundColor: '#f50057'//'#3f51b5'
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
                  <h2>{title} {actionButton && 
                  <Link to={actionLink}>
                    <Button
                    color="primary"
                    variant="extendedFab">
                    {actionButton}
                  </Button>
                  </Link>}</h2>
                  <p>{blob}</p>
                </div>
              </GridItem>
            </GridContainer>

          </Paper>
        </GridItem>
      </GridContainer>
    </div>
  )
}

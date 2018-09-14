import React from 'react';
import Paper from '@material-ui/core/Paper';
import GridContainer from './GridContainer';
import GridItem from './GridItem';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

export const SubHeader = ({title, description, textColor, paperColor, paperMargin}) => {
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Paper
            style={{
            textAlign: 'center',
            color: `${textColor}`,
            backgroundColor: `${paperColor}`,
            margin:`${paperMargin}`
          }}>
          <Typography variant="title">{title}</Typography>
          <p>{description}</p>
          </Paper>
        </GridItem>
      </GridContainer>
    </div>
  )
}

SubHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
}

SubHeader.defaultProps = {
  paperColor: '#FF8F00',
  textColor: '#212121'
};
import React from 'react';
import Paper from '@material-ui/core/Paper';
import GridContainer from './GridContainer';
import GridItem from './GridItem';
import PropTypes from 'prop-types';

export const SubHeader = ({title, description, textColor, paperColor}) => {
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
          <h4>{title}</h4>
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
  paperColor: '#f50057',
  textColor: 'white'
};
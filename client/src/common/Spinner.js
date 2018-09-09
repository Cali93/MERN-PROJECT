import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import GridContainer from './GridContainer';
import GridItem from './GridItem';
// import purple from '@material-ui/core/colors/purple';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

function Spinner(props) {
  const { classes } = props;
  return (
    <div style={{textAlign:'center', marginTop:'8%'}}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <CircularProgress className={classes.progress} size={70} />
        </GridItem>
      </GridContainer>
    </div>
  );
}

Spinner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Spinner);

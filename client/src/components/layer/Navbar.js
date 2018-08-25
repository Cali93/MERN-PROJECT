import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import {NavLink} from 'react-router-dom';
import MenuComponent from '../../common/MenuComponent';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  loginButton: {
    marginLeft: 15,
    marginRight: 20,
  },
  login: {
    fontSize: '15px',
    marginLeft: 25,
    marginRight: 10,
    marginTop:-15
  },
  register: {
    fontSize: '15px',
    marginLeft: 15,
    marginRight: 20,
    marginTop:-15
  },
};

function Navbar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <nav className="nav-wraper blue darken-3 center navwidth">

            <div className="container">
              <div className="row">
                <NavLink to="/" className="col s3 m3 l3">
                  <button className="btn">
                  <Typography variant="title" color="inherit" className={classes.flex}>
                    Home
                  </Typography>
                  </button>
                </NavLink>
                <NavLink className="col s3 m3 l3" to="/features">
                  <button className="btn">
                <Typography variant="title" color="inherit" className={classes.flex}>
                  Features
                </Typography>
                  </button>
                </NavLink>
                <NavLink className="col s3 m3 l3" to="/about">
                  <button className="btn">
                <Typography variant="title" color="inherit" className={classes.flex}>
                  About
                </Typography>
                  </button>
                </NavLink>
                <NavLink className="col s3 m3 l3" to="/contact">
                  <button className="btn">
                <Typography variant="title" color="inherit" className={classes.flex}>
                  Contact
                </Typography>
                  </button>
                </NavLink>
              </div>
            </div>
          </nav>
        <MenuComponent/>

        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
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
import AuthMenu from '../../core/auth/AuthMenu';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import Button from '@material-ui/core/Button';
import DashboardIcon from '@material-ui/icons/Dashboard';
import {Link} from 'react-router-dom';


const styles = theme => ({
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
  button: {
    margin: theme.spacing.unit*2,
  },
  input: {
    display: 'none',
  },
});

function Navbar(props) {
  const { classes } = props;
  const { isAuthenticated } = props.auth;

  const guestLinks = (
    <MenuComponent/>
  );
  const authLinks = (
    <div>
       <AuthMenu/>
      
      <Link to='/dashboard'>
        <Button variant="fab">
        <DashboardIcon/>
        </Button>
      </Link>
    </div>
  );
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
                <Button className={classes.button} variant="contained" color="secondary">
                  <Typography variant="title" color="inherit" className={classes.flex}>
                    Home
                  </Typography>
                  </Button>
                </NavLink>
                <NavLink className="col s3 m3 l3" to="/features">
                <Button className={classes.button} variant="contained" color="secondary">                  
                <Typography variant="title" color="inherit" className={classes.flex}>
                  Features
                </Typography>
                  </Button>
                </NavLink>
                <NavLink className="col s3 m3 l3" to="/about">
                  <Button className={classes.button} variant="contained" color="secondary">                  
                    <Typography variant="title" color="inherit" className={classes.flex}>
                      About
                    </Typography>
                  </Button>
                </NavLink>
                <NavLink className="col s3 m3 l3" to="/contact">
                <Button className={classes.button} variant="contained" color="secondary">                  
                <Typography variant="title" color="inherit" className={classes.flex}>
                  Contact
                </Typography>
                  </Button>
                </NavLink>
              </div>
            </div>
          </nav>
          {isAuthenticated ? authLinks : guestLinks}
        </Toolbar>
      </AppBar>
    </div>
  );
}
const mapStateToProps = (state) => ({
  auth: state.auth
})

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { logoutUser })( withStyles(styles)(Navbar));
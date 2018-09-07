import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import toRenderProps from 'recompose/toRenderProps';
import withState from 'recompose/withState';
import {NavLink} from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import { clearCurrentProfile } from '../actions/profileActions';


const WithState = toRenderProps(withState('anchorEl', 'updateAnchorEl', null));

function AuthMenu(props) {
  return (
    <WithState>
      {({ anchorEl, updateAnchorEl }) => {
        const open = Boolean(anchorEl);
        const handleClose = () => {
          updateAnchorEl(null);
        };
        const handleLogout = (e) => {
          e.preventDefault();
          props.clearCurrentProfile();
          props.logoutUser();
        };

        return (
          <React.Fragment>
            <Button
              variant="fab"
              aria-owns={open ? 'render-props-menu' : null}
              aria-haspopup="true"
              onClick={event => {
                updateAnchorEl(event.currentTarget);
              }}
            >
              < AccountCircle className="blue darken-4 teal-text text-lighten-2 z-depth-3"/>
            </Button>
            <Menu id="render-props-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose}><NavLink className="btn" to="/profile">Profile</NavLink></MenuItem>
              <MenuItem onClick={handleClose}><a onClick={handleLogout} className="btn">Logout</a></MenuItem>
              {/* if user is auth show below*/}
              {/* <MenuItem onClick={handleClose}><NavLink to="/profile">Profile</NavLink></MenuItem>
              <MenuItem onClick={handleClose}><NavLink to="/profile">Profile</NavLink></MenuItem> */}
              
            </Menu>
          </React.Fragment>
        );
      }}
    </WithState>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

AuthMenu.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  clearCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(AuthMenu);
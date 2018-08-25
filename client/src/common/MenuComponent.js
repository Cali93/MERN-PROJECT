import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import toRenderProps from 'recompose/toRenderProps';
import withState from 'recompose/withState';
import {NavLink} from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';


const WithState = toRenderProps(withState('anchorEl', 'updateAnchorEl', null));

function RenderPropsMenu() {
  return (
    <WithState>
      {({ anchorEl, updateAnchorEl }) => {
        const open = Boolean(anchorEl);
        const handleClose = () => {
          updateAnchorEl(null);
        };

        return (
          <React.Fragment>
            <Button
              aria-owns={open ? 'render-props-menu' : null}
              aria-haspopup="true"
              onClick={event => {
                updateAnchorEl(event.currentTarget);
              }}
            >
              < AccountCircle/>
            </Button>
            <Menu id="render-props-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose}><NavLink className="btn" to="/login">Login</NavLink></MenuItem>
              <MenuItem onClick={handleClose}><NavLink className="btn" to="/register">Register</NavLink></MenuItem>
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

export default RenderPropsMenu;
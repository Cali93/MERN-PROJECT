// import React, {Component} from 'react'
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import Button from '@material-ui/core/Button';

// // import AccountCircle from '@material-ui/core-icons/AccountCircle';

// const styles = theme => ({
//   root: {
//     marginTop: theme.spacing.unit *3,
//     width: '100%'
//   },
//   flex: {
//     flex: 1
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20
//   }
// })

// class Navbar extends Component {
//   state = {
//     anchorEl: null
//   };

//   handleMenu = event => {
//     this.setState({ anchorEl: event.currentTarget });
//   };

//   handleClose = () => {
//     this.setState({ anchorEl: null });
//   };
//   render() {
//     const { classes } = this.props;
//     const { auth, anchorEl } = this.state;
//     const open = Boolean(anchorEl);

//     return (
//       <AppBar position="static" elevation={0}>
//         <Toolbar>
//           <IconButton className={classes.menuButton} onClick={this.props.toggleDrawer}><MenuIcon/></IconButton>
//           <Typography className={classes.flex} type="title" color="inherit">
//             Material-UI Demo App
//           </Typography>
//           <Button className={classes.flex} type="title" color="inherit">
//             first link
//           </Button>
//           <Button className={classes.flex} type="title" color="inherit">
//             first link
//           </Button>
//           <Button className={classes.flex} type="title" color="inherit">
//             first link
//           </Button>
//           <Button className={classes.flex} variant="contained" color="primary">
//           Hello World
//           </Button>
//           <div>
//                 <IconButton
//                   aria-owns={open ? 'menu-appbar' : null}
//                   aria-haspopup="true"
//                   onClick={this.handleMenu}
//                   color="inherit"
//                 >
//                   <AccountCircle />
//                 </IconButton>
//                 <Menu
//                   id="menu-appbar"
//                   anchorEl={anchorEl}
//                   anchorOrigin={{
//                     vertical: 'top',
//                     horizontal: 'right',
//                   }}
//                   transformOrigin={{
//                     vertical: 'top',
//                     horizontal: 'right',
//                   }}
//                   open={open}
//                   onClose={this.handleClose}
//                 >
//                   <MenuItem onClick={this.handleClose}>Profile</MenuItem>
//                   <MenuItem onClick={this.handleClose}>My account</MenuItem>
//                 </Menu>
//               </div>
//         </Toolbar>
//       </AppBar>
//     )
//   }
// }

// Navbar.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(Navbar);
// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// // core components
// import GridItem from "../../common/GridItem";
// import GridContainer from "../../common/GridContainer";
// import TextFieldGroup from "../../common/textFieldGroup";
// import Button from '@material-ui/core/Button';
// import Card from "@material-ui/core/Card";
// import CardHeader from '@material-ui/core/CardHeader';
// import Avatar from '@material-ui/core/Avatar';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';

// import avatar from "../../assets/img/marc.jpg";

// const styles = {
//   cardCategoryWhite: {
//     color: "rgba(255,255,255,.62)",
//     margin: "0",
//     fontSize: "14px",
//     marginTop: "0",
//     marginBottom: "0"
//   },
//   cardTitleWhite: {
//     color: "#FFFFFF",
//     marginTop: "0px",
//     minHeight: "auto",
//     fontWeight: "300",
//     fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
//     marginBottom: "3px",
//     textDecoration: "none"
//   }
// };

// function UserProfile(props) {
//   const { classes } = props;
//   return (
//     <div>
//       <GridContainer>
//         <GridItem xs={12} sm={12} md={8}>
//           <Card>
//             <CardHeader color="primary">
//               <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
//               <p className={classes.cardCategoryWhite}>Complete your profile</p>
//             </CardHeader>
//             <CardContent>
//               <GridContainer>
//                 <GridItem xs={12} sm={12} md={5}>
//                   <TextFieldGroup
//                     label="Company"
//                     id="company"
//                     formControlProps={{
//                       fullWidth: true
//                     }}
//                     // inputProps={{
//                     //   disabled: true
//                     // }}
//                   />
//                 </GridItem>
//                 <GridItem xs={12} sm={12} md={3}>
//                   <TextFieldGroup
//                     label="Username"
//                     id="username"
//                     formControlProps={{
//                       fullWidth: true
//                     }}
//                   />
//                 </GridItem>
//                 <GridItem xs={12} sm={12} md={4}>
//                   <TextFieldGroup
//                     label="Email address"
//                     id="email-address"
//                     formControlProps={{
//                       fullWidth: true
//                     }}
//                   />
//                 </GridItem>
//               </GridContainer>
//               <GridContainer>
//                 <GridItem xs={12} sm={12} md={6}>
//                   <TextFieldGroup
//                     label="First Name"
//                     id="first-name"
//                     formControlProps={{
//                       fullWidth: true
//                     }}
//                   />
//                 </GridItem>
//                 <GridItem xs={12} sm={12} md={6}>
//                   <TextFieldGroup
//                     label="Last Name"
//                     id="last-name"
//                     formControlProps={{
//                       fullWidth: true
//                     }}
//                   />
//                 </GridItem>
//               </GridContainer>
//               <GridContainer>
//                 <GridItem xs={12} sm={12} md={4}>
//                   <TextFieldGroup
//                     label="City"
//                     id="city"
//                     formControlProps={{
//                       fullWidth: true
//                     }}
//                   />
//                 </GridItem>
//                 <GridItem xs={12} sm={12} md={4}>
//                   <TextFieldGroup
//                     label="Country"
//                     id="country"
//                     formControlProps={{
//                       fullWidth: true
//                     }}
//                   />
//                 </GridItem>
//                 <GridItem xs={12} sm={12} md={4}>
//                   <TextFieldGroup
//                     label="Postal Code"
//                     id="postal-code"
//                     formControlProps={{
//                       fullWidth: true
//                     }}
//                   />
//                 </GridItem>
//               </GridContainer>
//               <GridContainer>
//                 <GridItem xs={12} sm={12} md={12}>
//                   {/* <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel> */}
//                   <TextFieldGroup
//                     label="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
//                     id="about-me"
//                     formControlProps={{
//                       fullWidth: true
//                     }}
//                     inputProps={{
//                       multiline: true,
//                       rows: 5
//                     }}
//                   />
//                 </GridItem>
//               </GridContainer>
//             </CardContent>
//             <GridContainer>
//             <GridItem xs={12} sm={12} md={4}></GridItem>
//             <GridItem xs={12} sm={12} md={4}>
//             <CardActions>
//               <Button variant="raised" color="primary">Update Profile</Button>
//             </CardActions>
//             </GridItem>
//             <GridItem xs={12} sm={12} md={4}></GridItem>
//             </GridContainer>
//           </Card>
//         </GridItem>
//         <GridItem xs={12} sm={12} md={4}>
//           <Card profile>
//             <Avatar profile>
//               <a href="#pablo" onClick={e => e.preventDefault()}>
//                 <img src={avatar} alt="..." />
//               </a>
//             </Avatar>
//             <CardContent profile>
//               <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
//               <h4 className={classes.cardTitle}>Alec Thompson</h4>
//               <p className={classes.description}>
//                 Don't be scared of the truth because we need to restart the
//                 human foundation in truth And I love you like Kanye loves Kanye
//                 I love Rick Owens’ bed design but the back is...
//               </p>
//               <Button variant="raised" color="primary" round>
//                 Follow
//               </Button>
//             </CardContent>
//           </Card>
//         </GridItem>
//       </GridContainer>
//     </div>
//   );
// }

// export default withStyles(styles)(UserProfile);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
// core components
import GridItem from "../../../common/GridItem";
import GridContainer from "../../../common/GridContainer";
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import AccountCircle from '@material-ui/icons/AccountCircle';

import FormHelperText from '@material-ui/core/FormHelperText';
import {PaperHeader} from '../../../common/PaperHeader';
import TextAreaFieldGroup from "../../../common/TextAreaFieldGroup";
import TextFieldGroup from "../../../common/textFieldGroup";
import SelectList from '../../../common/SelectList';
// import {formatProfileData} from '../../../utils/formatProfileData';

import {isEmpty} from '../../../utils/is-empty';
 
// import avatar from "../../../assets/img/marc.jpg";

import {createProfile, getCurrentProfile} from '../../../actions/profileActions';

class EditProfile extends Component {
  state = {
    displaySocialInputs: false,
    handle: '',
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
    errors: {}
  }

  componentDidMount(){
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({errors:nextProps.errors})
    }

    if(nextProps.profile.profile){
      const profile = nextProps.profile.profile;

      // Bring skills array back to CSV
      const skillsCSV = profile.skills.join(',');

      // If profile field doesnt exist, make empty string
      profile.company = !isEmpty(profile.company) ? profile.company : '';
      profile.website = !isEmpty(profile.website) ? profile.website : '';
      profile.location = !isEmpty(profile.location) ? profile.location : '';
      profile.githubusername = !isEmpty(profile.githubusername)
        ? profile.githubusername
        : '';
      profile.bio = !isEmpty(profile.bio) ? profile.bio : '';
      profile.social = !isEmpty(profile.social) ? profile.social : {};
      profile.twitter = !isEmpty(profile.social.twitter)
        ? profile.social.twitter
        : '';
      profile.facebook = !isEmpty(profile.social.facebook)
        ? profile.social.facebook
        : '';
      profile.linkedin = !isEmpty(profile.social.linkedin)
        ? profile.social.linkedin
        : '';
      profile.youtube = !isEmpty(profile.social.youtube)
        ? profile.social.youtube
        : '';
      profile.instagram = !isEmpty(profile.social.instagram)
        ? profile.social.instagram
        : '';

      // Set component fields state
      this.setState({
        handle: profile.handle,
        company: profile.company,
        website: profile.website,
        location: profile.location,
        status: profile.status,
        skills: skillsCSV,
        githubusername: profile.githubusername,
        bio: profile.bio,
        twitter: profile.twitter,
        facebook: profile.facebook,
        instagram: profile.instagram,
        linkedin: profile.linkedin,
        youtube: profile.youtube
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newProfile = {
      displaySocialInputs: false,
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    }
    console.log(newProfile);

    this.props.createProfile(newProfile, this.props.history);
    
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.type === 'checkbox' ? (e.target.checked) : (e.target.value)
    })
  }

  render() {
    const styles = {
      cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
      },
      cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
      },
      location:{
        fontSize:"14px"
      }
    };
    const { errors, displaySocialInputs } = this.state;

    let socialInputs;
    if(displaySocialInputs){
      socialInputs = (
        <div>
         <Card>
          <CardHeader color="primary" title="Social Medias"
            subheader="Put your social media links">
            </CardHeader>
            <CardContent>
            <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
            <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
              <TextFieldGroup
                    name="twitter"
                    onChange={this.handleChange}
                    value={this.state.twitter}
                    label="Twitter"
                    id="twitter"
                    formControlProps={{
                      fullWidth: true
                    }}
                    error={errors.twitter}
                  />
              </Grid>
              </Grid>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
            <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
              <TextFieldGroup
                    name="facebook"
                    onChange={this.handleChange}
                    value={this.state.facebook}
                    label="Facebook"
                    id="facebook"
                    formControlProps={{
                      fullWidth: true
                    }}
                    error={errors.facebook}
                  />
              </Grid>
              </Grid>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
            <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
              <TextFieldGroup
                    name="linkedin"
                    onChange={this.handleChange}
                    value={this.state.linkedin}
                    label="LinkedIn"
                    id="linkedin"
                    formControlProps={{
                      fullWidth: true
                    }}
                    error={errors.linkedin}

                  />
              </Grid>
              </Grid>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
            <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
              <TextFieldGroup
                    name="youtube"
                    onChange={this.handleChange}
                    value={this.state.youtube}
                    label="YouTube"
                    id="youtube"
                    formControlProps={{
                      fullWidth: true
                    }}
                    error={errors.youtube}

                  />
              </Grid>
              </Grid>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
            <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
              <TextFieldGroup
                    name="instagram"
                    onChange={this.handleChange}
                    value={this.state.instagram}
                    label="Instagram"
                    id="instagram"
                    formControlProps={{
                      fullWidth: true
                    }}
                    error={errors.instagram}

                  />
              </Grid>
              </Grid>
            </GridItem>
            </GridContainer>

            </CardContent>
          </Card>
        </div>
      )
    }


    let profileContent;
    if(false){ //this.state.handle && this.state.company || this.state.status || this.state.bio
      let role;
      if(this.state.status && this.state.company){
         role = <span>@</span>
     }
      profileContent = (
        <Card>
        <Avatar>
          {/* <a href="#pablo" onClick={e => e.preventDefault()}>
            <img src={avatar} alt="..." />
          </a> */}
        </Avatar>
        <CardContent>
          <h4 className={styles.cardTitle}>{this.state.handle}</h4><span className={styles.location}> {this.state.location}</span>
          <h5 className={styles.cardTitle}>{this.state.status} {role} {this.state.company}</h5>
          <p className={styles.description}>
          {this.state.bio}
          </p>
          {/* <Button variant="extendedFab" color="primary">
            Follow
          </Button> */}
          {/* Replace this with social icons with links */}
        </CardContent>
      </Card>
      )
    }

    const options = [
      { label: '* Select Professional Status', value: 0 },
      { label: 'Developer', value: 'Developer' },
      { label: 'Junior Developer', value: 'Junior Developer' },
      { label: 'Senior Developer', value: 'Senior Developer' },
      { label: 'Manager', value: 'Manager' },
      { label: 'Student or Learning', value: 'Student or Learning' },
      { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
      { label: 'Intern', value: 'Intern' },
      { label: 'Other', value: 'Other' }
    ];

    return (
      <div>
    <form onSubmit={this.handleSubmit}>
    <PaperHeader title="Complete your profile" blob="Tell us a bit more about you !" prevButton="Go Back"/>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardContent>
              <GridContainer>

                <GridItem xs={12} sm={12} md={6}>
                  <TextFieldGroup
                    name="handle"
                    onChange={this.handleChange}
                    value={this.state.handle}
                    label="* Handle"
                    id="handle"
                    formControlProps={{
                      fullWidth: true
                    }}
                    placeholder="* Profile handle"
                    helperText="A unique handle for your profile URL. Your full name, company name, nickname, etc. (this CAN'T be changed later)"
                    // inputProps={{
                    //   disabled: true
                    // }}
                    error={errors.handle}                    
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <TextFieldGroup
                    name="company"
                    onChange={this.handleChange}
                    value={this.state.company}
                    label="Company"
                    id="company"
                    formControlProps={{
                      fullWidth: true
                    }}
                    helperText="Could be your own company or one you work for"
                    error={errors.company}

                  />
                </GridItem>
                
                <GridItem xs={12} sm={12} md={6}>
                  <TextFieldGroup
                    name="website"
                    onChange={this.handleChange}
                    value={this.state.website}
                    label="Website address"
                    id="website-address"
                    formControlProps={{
                      fullWidth: true
                    }}
                    helperText="Could be your own website or a company one"
                    error={errors.website}

                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextFieldGroup
                    name="location"
                    onChange={this.handleChange}
                    value={this.state.location}
                    label="Location"
                    id="location"
                    formControlProps={{
                      fullWidth: true
                    }}
                    helperText="Your city and postcode"
                    error={errors.location}

                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                <div style={{marginTop:'12px'}}>
                <SelectList
                    name="status"
                    onChange={this.handleChange}
                    value={this.state.status}
                    label="Status"
                    id="status"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder:"* Select Professional status"
                    }}
                    options={options}
                    errors={errors}
                  />
                  <FormHelperText>Give us an idea of where you are at in your career</FormHelperText>
                </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextFieldGroup
                    name="githubusername"
                    onChange={this.handleChange}
                    value={this.state.githubusername}
                    label="GithHub username"
                    id="github-username"
                    formControlProps={{
                      fullWidth: true
                    }}
                    helperText="If you want your latest repos and a GitHub link, include your username"
                    error={errors.githubusername}
                    
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <TextAreaFieldGroup
                    name="bio"
                    onChange={this.handleChange}
                    value={this.state.bio}
                    label="Bio"
                    id="bio"
                    formControlProps={{
                      fullWidth: true
                    }}
                    helperText="Tell us a little bit about yourself"
                    error={errors.bio}
                  />
                </GridItem>

              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  {/* <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel> */}
                  <TextAreaFieldGroup
                    name="skills"
                    onChange={this.handleChange}
                    value={this.state.skills}
                    label="Skills"
                    id="skills"
                    formControlProps={{
                      fullWidth: true
                    }}
                    helperText="Please use comma spearated (eg. HTML, CSS, JavaScript, etc.)"
                    errors={errors.skills}
                  />
                </GridItem>
              </GridContainer>
              {/* <Grid container spacing={8} alignItems="flex-end">

            </Grid> */}
            </CardContent>
            <GridContainer>
            <GridItem xs={12} sm={12} md={4}></GridItem>
            <GridItem xs={12} sm={12} md={4}>
            <CardActions>
              <Button onClick={this.handleSubmit} variant="contained" color="primary">Update Profile</Button>
            </CardActions>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}></GridItem>
            </GridContainer>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
            {profileContent}
          <Button variant="outlined" onClick={()=>{this.setState(prevState => ({
            displaySocialInputs:!prevState.displaySocialInputs
          }))
          }}>Add social networks</Button>
          {socialInputs}
        </GridItem>
      </GridContainer>
            </form>
    </div>
    )
  }

}

  EditProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  }

  const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
  })

export default connect (mapStateToProps, {createProfile, getCurrentProfile})(withRouter(EditProfile));

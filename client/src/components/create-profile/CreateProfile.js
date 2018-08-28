import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
// core components
import GridItem from "../../common/GridItem";
import GridContainer from "../../common/GridContainer";
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import AccountCircle from '@material-ui/icons/AccountCircle';

import FormHelperText from '@material-ui/core/FormHelperText';

import TextAreaFieldGroup from "../../common/TextAreaFieldGroup";
import TextFieldGroup from "../../common/textFieldGroup";
import SelectList from '../../common/SelectList';

 
import avatar from "../../assets/img/marc.jpg";

class CreateProfile extends Component {
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
      instagram: this.state.instagram,
    }
    // console.log(newProfile);

    // this.props.createProfile(newProfile, this.props.history);
    
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
      }
    };
    const { errors } = this.state;

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
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary" title="Complete your profile"
            subheader="Fields marked with * are required">
            </CardHeader>
            <CardContent>
              <GridContainer>
               <GridItem xs={12} sm={12} md={6}>
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

                </GridItem>

                  <GridItem xs={12} sm={12} md={6}>
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

                </GridItem>

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
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                <TextFieldGroup
                    name="skills"
                    onChange={this.handleChange}
                    value={this.state.skills}
                    label="Skills"
                    id="skills"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                    helperText="Please use comma spearated (eg. HTML, CSS, JavaScript, etc.)"
                  />
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
                  />
                </GridItem>

              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  {/* <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel> */}
                  <TextFieldGroup
                    name="skills"
                    onChange={this.handleChange}
                    value={this.state.skills}
                    label="Skills"
                    id="skills"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
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
              <Button variant="contained" color="primary">Update Profile</Button>
            </CardActions>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}></GridItem>
            </GridContainer>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <Avatar>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </Avatar>
            <CardContent>
              <h6 className={styles.cardCategory}>CEO / CO-FOUNDER</h6>
              <h4 className={styles.cardTitle}>Alec Thompson</h4>
              <p className={styles.description}>
                Don't be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button variant="extendedFab" color="primary">
                Follow
              </Button>
            </CardContent>
          </Card>
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
                  />
              </Grid>
              </Grid>
            </GridItem>
            </GridContainer>

            </CardContent>
          </Card>
        </GridItem>
      </GridContainer>
            </form>
    </div>
    )
  }

}

  CreateProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  }

  const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
  })

export default connect (mapStateToProps)(CreateProfile);

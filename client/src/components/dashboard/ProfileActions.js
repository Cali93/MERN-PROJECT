import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import EducationIcon from '@material-ui/icons/Book';
import ExperienceIcon from '@material-ui/icons/Work';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import {Link} from 'react-router-dom';

export const ProfileActions = () => {
  return (
    <div>
    <Paper square style={{ width: 'auto' }}>
        <Link to="/edit-profile"><Button variant="contained" ><PersonPinIcon />EDIT PROFILE</Button></Link>
        <Link to="/add-experience"><Button variant="contained"><ExperienceIcon />ADD EXPERIENCE</Button></Link>
        <Link to="/add-education"><Button variant="contained"><EducationIcon />ADD EDUCATION</Button></Link>
    </Paper>
    </div>
  )
}



import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {Button} from '@material-ui/core';
import {PaperHeader} from '../../common/PaperHeader';
import {Paper} from '@material-ui/core';
import {Table} from '@material-ui/core';
import {TableHead} from '@material-ui/core';
import {TableBody} from '@material-ui/core';
import {TableCell} from '@material-ui/core';
import {TableRow} from '@material-ui/core';
import GridContainer from '../../common/GridContainer';
import GridItem from '../../common/GridItem';
import Moment from 'react-moment';
import {isEmpty} from '../../utils/is-empty';
import { deleteExperience } from '../../actions/profileActions';

class Experiences extends Component {
  handleDeleteExp = (id) => {
    this.props.deleteExperience(id);
  }
  render() {
    const experience = this
      .props
      .experience
      .map(exp => (
        <TableRow key={exp._id}>
          <TableCell>
            {exp.company}
          </TableCell>
          <TableCell>
            {exp.title}
          </TableCell>
          <TableCell>
            {isEmpty(exp.location) ? null : exp.location} 
          </TableCell>
          <TableCell >
            <Moment format="DD/MM/YYYY">{exp.from}</Moment>
            <span> - </span>
            {exp.to === null ? ('Now') : (<Moment format="DD/MM/YYYY">{exp.to}</Moment>)}
          </TableCell>
          <TableCell>
            <Button variant="outlined" color="secondary" onClick={() => this.handleDeleteExp(exp._id)}>Delete</Button>
          </TableCell>
        </TableRow>
      ))
    return (
      <div>
        <PaperHeader title="Experience details" paperColor="#3f51b5" paperMargin="15px 0"/>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
          <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Company</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Years</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {experience}
            </TableBody>
          </Table>
        </Paper>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

Experiences.propTypes = {
  deleteExperience: PropTypes.func.isRequired
}

export default connect(null, {deleteExperience})(Experiences);

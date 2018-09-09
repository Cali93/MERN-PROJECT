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

import { deleteEducation } from '../../actions/profileActions';

class Educations extends Component {
  handleDeleteEdu = (id) => {
    this.props.deleteEducation(id);
  }
  render() {
    const education = this
      .props
      .education
      .map(edu => (
        <TableRow key={edu._id}>
          <TableCell>
            {edu.school}
          </TableCell>
          <TableCell>
            {edu.degree}
          </TableCell>
          <TableCell >
            <Moment format="DD/MM/YYYY">{edu.from}</Moment>
            <span> - </span>
            {edu.to === null ? ('Now') : (<Moment format="DD/MM/YYYY">{edu.to}</Moment>)}
          </TableCell>
          <TableCell>
            <Button variant="outlined" color="secondary" onClick={() => this.handleDeleteEdu(edu._id)}>Delete</Button>
          </TableCell>
        </TableRow>
      ))
    return (
      <div>
        <PaperHeader title="Education details" paperColor="#3f51b5"/>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
          <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>School</TableCell>
                <TableCell>Degree</TableCell>
                <TableCell>Years</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {education}
            </TableBody>
          </Table>
        </Paper>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

Educations.propTypes = {
  deleteEducation: PropTypes.func.isRequired
}

export default connect(null, {deleteEducation})(Educations);

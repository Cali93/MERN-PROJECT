import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../common/Spinner';
import PostForm from './PostForm';
import GridContainer from '../../common/GridContainer'
import GridItem from '../../common/GridItem'
import {PaperHeader} from '../../common/PaperHeader'

class Posts extends Component {
  render() {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
          <PaperHeader title="Developers posts" blob="Here is the feed of the posts"/>
          <PostForm/>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default Posts
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {getPost} from '../../actions/postActions';
import { Link } from 'react-router-dom';

import Spinner from '../../common/Spinner';
import GridContainer from '../../common/GridContainer';
import GridItem from '../../common/GridItem';

import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentFeed from './CommentFeed';

import { PaperHeader } from '../../common/PaperHeader';

class Post extends Component {

  componentDidMount(){
    this.props.getPost(this.props.match.params.id);
  }

  render() {

    const {post, loading} = this.props.post;
    let postContent;

    console.log('post page', post)

    if(post === null || loading || Object.keys(post).length === 0){
      postContent = (<Spinner/>)
    } else {
      postContent = (
        <div>
          <PaperHeader title={`${post.name}'s post`} blob="Interact, comment, give your thoughts about it" prevButton="Back to feed" prevLink="/feed"/>
          <PostItem post={post} showActions={false}/>
          <CommentForm postId={post._id}/>
          <CommentFeed postId={post._id} comments={post.comments}/>
        </div>
      )
    }
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>

          {/* <Link to="/feed">Back to feed</Link>
           */}
           {postContent}
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired

}

const mapStateToProps = state => ({
  post:state.post
})

export default connect(mapStateToProps, { getPost })(Post)
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../common/Spinner';
import PostForm from './PostForm';
import PostFeed from './PostFeed';
import GridContainer from '../../common/GridContainer'
import GridItem from '../../common/GridItem'
import {PaperHeader} from '../../common/PaperHeader'
import { getPosts } from '../../actions/postActions';

class Posts extends Component {

  componentDidMount(){
    this.props.getPosts();
  }
  render() {
    const { posts, loading } = this.props.post;
    let postContent;

    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = <PostFeed posts={posts} />;
    }
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
          <PaperHeader title="Developers posts" blob="Here is the feed of the posts"/>
          <PostForm/>
          {postContent}
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired

}

const mapStateToProps = state => ({
  post:state.post
})

export default connect(mapStateToProps, { getPosts })(Posts)
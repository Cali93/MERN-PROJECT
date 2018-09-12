import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {Link} from 'react-router-dom';
import {Paper, Button, Divider, Typography} from '@material-ui/core';
// import Icon from '@material-ui/core/Icon';
import ThumbsUp from '@material-ui/icons/ThumbUp';
import ThumbsDown from '@material-ui/icons/ThumbDown';
import CommentIcon from '@material-ui/icons/Comment';
import DeleteIcon from '@material-ui/icons/Delete';
import GridContainer from '../../common/GridContainer';
import GridItem from '../../common/GridItem';
import {deletePost, addLike, removeLike} from '../../actions/postActions';

class PostItem extends Component {

  handleDelete = (id) => {
    this.props.deletePost(id);
  }

  handleLike = (id) => {
    this.props.addLike(id);
  }

  handleUnlike = (id) => {
    this.props.removeLike(id);
  }

  findUserLike(likes){
    const {auth} = this.props;
    if(likes.filter(like => like.user === auth.user.id).length > 0){
      return true
    } else {
      return false
    }
  }

  render() {

    const {auth, post, showActions} = this.props;
    const styles = {
      profileImage: {
        borderRadius: '50%',
        width: '120px',
        marginTop: '10px'
      }
    }

    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Paper
              style={{
              margin: '10px 0',
              padding: '10px'
            }}>
              <GridContainer>
                <GridItem
                  xs={12}
                  sm={4}
                  md={4}
                  style={{
                  textAlign: 'center'
                }}>
                  <Paper
                    style={{
                    margin: '10px 0',
                    padding: '10px',
                    backgroundColor:'#3f51b5'
                  }}>
                    <Link to={`/profile/${auth.user.handle}`}>
                      <img src={post.avatar} style={styles.profileImage} alt="avatar"></img>
                      <p>
                        <Button variant="raised">{post.name}</Button>
                      </p>
                    </Link>
                  </Paper>
                </GridItem>
                <GridItem xs={12} sm={8} md={8}>
                  {/* <Paper
                    style={{
                    margin: '10px 0',
                    padding: '10px'
                  }}> */}
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <GridContainer>
                          <GridItem
                            xs={12}
                            sm={12}
                            md={12}
                            style={{
                            margin: '10px'
                          }}>
                            <Typography variant="subheading">
                              <strong>{post.text}</strong>
                            </Typography>
                          </GridItem>
                        </GridContainer>

                        {showActions ? (
                              <GridContainer
                              style={{
                              textAlign: 'center'
                            }}>
                              <GridItem xs={6} sm={3} md={4}>
                                <Button onClick={() => this.handleLike(post._id)} variant="outlined" color="primary" aria-label="Like the post" >
                                  <ThumbsUp className={classnames('', {'liked-btn': this.findUserLike(post.likes)})}></ThumbsUp>
                                  {post.likes.length}
                                </Button>
                                <Button onClick={() => this.handleUnlike(post._id)} variant="outlined" color="secondary" aria-label="Disike the post">
                                  <ThumbsDown></ThumbsDown>
                                </Button>
                              </GridItem>
                              <GridItem xs={12} sm={6} md={4}>
                                <Link to={`/post/${post._id}`}>
                                  <Button variant="outlined" aria-label="Add an alarm">
                                    <CommentIcon></CommentIcon>Comments
                                  </Button>
                                </Link>
                              </GridItem>
                              {post.user === auth.user.id ? (
                              <GridItem xs={6} sm={3} md={4}>
                              <Button variant="outlined" color="secondary" onClick={() => this.handleDelete(post._id)} aria-label="Disike the post">
                                <DeleteIcon></DeleteIcon>
                              </Button>
                            </GridItem>
                              ) : null}
                            </GridContainer>
                        ): null}

                      </GridItem>
                    </GridContainer>

                  {/* </Paper> */}
                </GridItem>
              </GridContainer>
            </Paper>
            <Divider/>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

PostItem.propTypes = {
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func,
  addLike: PropTypes.func,
  removeLike: PropTypes.func
}

PostItem.defaultProps = {
  showActions:true
}

const mapStateToProps = state => ({auth: state.auth});

export default connect(mapStateToProps, {deletePost, addLike, removeLike})(PostItem);
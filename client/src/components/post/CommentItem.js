import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteComment} from '../../actions/postActions';
import GridContainer from '../../common/GridContainer';
import GridItem from '../../common/GridItem';
import { Paper, Typography, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


class CommentItem extends Component {
  handleDelete = (postId, commentId) => {
    this.props.deleteComment(postId,commentId);
  }
  render() {
    const { auth, comment, postId} = this.props;
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
          <Paper>
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
                      <img src={comment.avatar} style={styles.profileImage} alt="avatar"></img>
                      <p>
                        <Button variant="raised">{comment.name}</Button>
                      </p>
                    </Link>
                  </Paper>
                </GridItem>
            {/* </GridContainer>
            <GridContainer> */}
                          <GridItem
                            xs={12}
                            sm={8}
                            md={8}
                            style={{
                            margin: '10px'
                          }}>
                            <Typography variant="subheading">
                              <strong>{comment.text}</strong>
                            </Typography>
                            {comment.user === auth.user.id ? (
                              // <GridItem xs={6} sm={3} md={4}>
                              <Button variant="outlined" color="secondary" onClick={() => this.handleDelete(postId, comment._id)} aria-label="Delete the comment">
                                <DeleteIcon></DeleteIcon>
                              </Button>
                            // </GridItem>
                              ) : null}
                          </GridItem>
                        </GridContainer>
          </Paper>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  auth: PropTypes.object,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  auth:state.auth
})

export default connect(mapStateToProps, {deleteComment})(CommentItem)

import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import TextAreaFieldGroup from '../../common/TextAreaFieldGroup';
import {addComment} from '../../actions/postActions';
import GridContainer from '../../common/GridContainer';
import GridItem from '../../common/GridItem';
import {Paper, Button} from '@material-ui/core';
import {SubHeader} from '../../common/SubHeader';

class CommentForm extends Component {
  state = {
    text: '',
    errors: {}
  }

  componentWillReceiveProps(newProps){
    if(newProps.errors){
      this.setState({errors:newProps.errors})
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const {user} = this.props.auth;
    const {postId} = this.props;

    const newComment = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    }

    this.props.addComment(postId, newComment);
    this.setState({text:''});
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render() {
    const {errors} = this.state;
    return (
      <div>
        <SubHeader paperColor="#F9A825" title="Make a comment" paperMargin="10px 0"/>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Paper>
              <form onSubmit={this.handleSubmit}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <div>
                      <TextAreaFieldGroup
                        name="text"
                        label="Reply to post"
                        placeholder="Reply to post"
                        // helperText="Explain what you did, what you learned and so on."
                        onChange={this.handleChange}
                        value={this.state.text}
                        error={errors.text}/>
                    </div>
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <div
                      style={{
                      textAlign: 'center',
                      margin: '10px 0 10px 0'
                    }}>
                      <Button variant="outlined" color="primary" onClick={this.handleSubmit}>Publish a post</Button>
                    </div>
                  </GridItem>
                </GridContainer>
              </form>
            </Paper>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired
}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})
export default connect(mapStateToProps, {addComment})(CommentForm)

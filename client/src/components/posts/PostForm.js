import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import TextAreaFieldGroup from '../../common/TextAreaFieldGroup';
import {addPost} from '../../actions/postActions';
import GridContainer from '../../common/GridContainer';
import GridItem from '../../common/GridItem';
import {Paper, Button} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {SubHeader} from '../../common/SubHeader';

class PostForm extends Component {
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

    const newPost = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    }

    this.props.addPost(newPost);
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
        <SubHeader paperColor="#3f51b5" title="Say something" paperMargin="10px 0"/>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Paper>
              <form onSubmit={this.handleSubmit}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <div>
                      <TextAreaFieldGroup
                        name="text"
                        label="Create a post"
                        placeholder="Create a post"
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

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})
export default connect(mapStateToProps, {addPost})(PostForm)

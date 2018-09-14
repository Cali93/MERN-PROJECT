import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../common/Spinner';
// import PostForm from './PostForm';
// import PostFeed from './PostFeed';
import GridContainer from '../../common/GridContainer'
import GridItem from '../../common/GridItem'
import {PaperHeader} from '../../common/PaperHeader'
import { getProjects } from '../../actions/projectActions';
import CreateProject from '../project/create-project/CreateProject';
import ProjectsFeed from './ProjectsFeed';

class Projects extends Component {
  state = {
    projects: []
  }
  componentDidMount(){
    this.props.getProjects();
  }
  render() {
    const { projects, loading } = this.props.project;
    // let projectContent;

    // if (projects === null || loading) {
    //   projectContent = <Spinner />;
    // } else {
    //   projectContent = <PostFeed posts={posts} />;
    // }
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
          <CreateProject/>
          <ProjectsFeed projects={projects}/>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

Projects.propTypes = {
  getProjects: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired

}

const mapStateToProps = state => ({
  project:state.project
})

export default connect(mapStateToProps, { getProjects })(Projects)
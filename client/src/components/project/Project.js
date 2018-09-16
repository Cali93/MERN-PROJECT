import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProjectById} from '../../actions/projectActions';
import Spinner from '../../common/Spinner';
class Project extends Component {
  componentDidMount(){
    this.props.getProjectById(this.props.match.params.projectId);
  }
  componentDidUpdate(){
    console.log('project page', this.props.project.project)
  }
  render() {
    const {project, loading} = this.props.project;
    // const { name, description, customer, budget} = this.props.project.project
    let projectContent;
    if(project === null || loading || Object.keys(project).length === 0){
      projectContent = (<Spinner/>)
    } else {
      projectContent = (
        <div>
          {Object.keys(project).length >  0? (
            <div>
            <p>{project.name}</p>
            <p>{project.description}</p>
            <p>{project.customer}</p>
            <p>{project.budget}</p>
            </div>
          ) : null}
        </div>
      )
    }
    return (
      <div>
        {projectContent}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  project:state.project
})

export default connect(mapStateToProps, { getProjectById })(Project)

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProjects } from '../../actions/projectActions';

import CreateProject from '../project/create-project/CreateProject';
import ProjectsFeed from './ProjectsFeed';

import Create from '@material-ui/icons/Add'
import List from '@material-ui/icons/List'
import Schedule from '@material-ui/icons/Schedule'

import GridContainer from '../../common/GridContainer'
import GridItem from '../../common/GridItem'
import NavPills from '../../common/NavPills/NavPills'
import Spinner from '../../common/Spinner'

class Projects extends Component {
  state = {
    projects: []
  }
  componentDidMount(){
    this.props.getProjects();
  }
  render() {
    const { projects, loading } = this.props.project;
    let projectContent;

    if (projects === null || loading) {
      projectContent = <Spinner />;
    } else {
      projectContent = <ProjectsFeed projects={projects} />;
    }
    return (
      <div>
        <GridContainer>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <NavPills
                  color="primary"
                  tabs={[
                    {
                      tabButton: "View Projects",
                      tabIcon: List,
                      tabContent: (
                        <span>
                          {projectContent}
                        </span>
                      )
                    },
                    {
                      tabButton: "Create a project",
                      tabIcon: Create,
                      tabContent: (
                        <span>
                          <CreateProject/>
                        </span>
                      )
                    },
                    {
                      tabButton: "Timesheet",
                      tabIcon: Schedule,
                      tabContent: (
                        <span>
                          {/* <ProjectDetail /> */}
                        </span>
                      )
                    }
                  ]}
                />
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
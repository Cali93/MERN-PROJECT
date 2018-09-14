import axios from 'axios';

import {
  GET_PROJECT,
  GET_PROJECTS,
  PROJECT_LOADING,
  GET_ERRORS
} from './types';

// Get profiles
export const getProjects = () => dispatch => {
  dispatch(setProjectLoading());
  axios
    .get('/api/projects')
    .then(res =>
      dispatch({
        type: GET_PROJECTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROJECTS,
        payload: null
      })
    );
};

// Get current project
export const getProjectById = (projectId) => dispatch => {
  dispatch(setProjectLoading());
  axios
    .get(`/api/projects/${projectId}`)
    .then(res =>
      dispatch({
        type: GET_PROJECT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROJECT,
        payload: null
      })
    );
};

// Create project
export const createProject = (projectData, history) => dispatch => {
  axios
    .post('/api/projects', projectData)
    .then(res => history.push('/edit-project'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Project loading
export const setProjectLoading = () => {
  return {
    type: PROJECT_LOADING
  };
};

const express = require('express');
const router = express.Router();
const passport = require('passport');

const projectCtrl = require('../controllers/projects');

// @route POST     api/projects/
// @description   Create a new project
// @access        Public
router.post('/', projectCtrl.create_project);

// @route GET     api/projects/
// @description   Get all the projects
// @access        Public

router.get('/', projectCtrl.get_all_projects);

// @route GET     api/projects/:project
// @description   Get a single project
// @access        Public

router.get('/:projectId', projectCtrl.get_project);

// @route PATCH     api/projects/:project
// @description   Edit a single project
// @access        Public

router.patch('/:projectId', projectCtrl.update_project);

// @route DELETE  api/projects/:project
// @description   Deletes a project
// @access        Private

router.delete('/:projectId', projectCtrl.delete_project);

module.exports = router;
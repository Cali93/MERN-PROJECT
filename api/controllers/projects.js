const Project = require ("../models/Project");
const validateProjectInput = require('../validation/project');

// const passport = require("passport");

exports.get_all_projects = (req, res) => {
  Project.find()
    .select("user timesheets name description customer budget")
    .populate('timesheets', 'beginsAt endsAt timesheetedTime')
    .exec()
    .then(projects => {
      if(!projects){
        errors.noprojects = 'There are no projects.';
        res.status(404).json(errors);
      }
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
}

exports.create_project = (req, res) => {

  const {errors, isValid} = validateProjectInput(req.body);

  // Check Validation
  if(!isValid){
    // Return any errors with 400 status
    return res.status(400).json(errors);
  }

  // Create a newProject
  const newProject = new Project({
    name:req.body.name,
    description:req.body.description,
    budget:req.body.budget,
    customer:req.body.customer
  });
  // console.log('new Project', newProject);

  // Save the project
  newProject.save().then(project => res.status(201).json(project)).catch(err => res.status(404).json(err));

}

exports.get_project = (req, res) => {
  Project.findById(req.params.projectId)
    .then(project => {
      if (!project) {
        return res.status(404).json({
          message: "Project not found"
        });
      }
      res.status(200).json({
        project: project,
        request: {
          type: "GET",
          url: "http://localhost:5000/api/projects/"
        }
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
}

exports.update_project = (req, res) => {
  
  const id = req.params.projectId;

  Project.findOneAndUpdate({ _id: id }, req.body, { new:false })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'Project updated',
          request: {
              type: 'GET',
              url: 'http://localhost:5000/projects/' + id
          }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}

exports.delete_project = (req, res) => {
  Project.remove({ _id: req.params.projectId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Project deleted",
        request: {
          type: "GET",
          url: "http://localhost:5000/projects/"
        }
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
}
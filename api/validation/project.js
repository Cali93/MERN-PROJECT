const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProjectInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.description = !isEmpty(data.description) ? data.description : '';
  data.customer = !isEmpty(data.customer) ? data.customer : '';
  data.budget = !isEmpty(data.budget) ? data.budget : '';

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Project name field is required';
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Description field is required';
  }

  if (Validator.isEmpty(data.customer)) {
    errors.customer = 'Customer field is required';
  }
  
  if (Validator.isEmpty(data.budget)) {
    errors.budget = 'Budget field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

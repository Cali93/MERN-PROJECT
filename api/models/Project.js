const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    timesheet: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Timesheet'}],
    name: {type: String},
    description: {type: String},
    customer: {type: String},
    budget: {type: String}
});

module.exports = Project = mongoose.model('Project', projectSchema);
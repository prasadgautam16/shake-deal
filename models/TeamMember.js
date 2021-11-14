const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TeamMemberSchema = new Schema({
    teamMemberName: {
        type: String,
        required: true 
    },
    teamMemberPriority: {
        type: String,
        required: true 
    },
    team: {
        type: Schema.Types.ObjectId,
        ref: 'team',
        required: true
    },
    taskAllocated: {
        type: Schema.Types.ObjectId,
        ref: 'task'
    }
});

module.exports = TeamMember = mongoose.model('teamMember', TeamMemberSchema);

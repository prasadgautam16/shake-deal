const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true 
    }
});

module.exports = Team = mongoose.model('team', TeamSchema);

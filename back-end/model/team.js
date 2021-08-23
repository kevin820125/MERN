const mongoose = require('mongoose');




const TeamSchema = new mongoose.Schema({
    team_id :{
        type: Number,
        required:true

    },
    people:{
        type: Array,
    },
    teamLead:{
        type: Number,
        required:true
    }
})

module.exports = mongoose.model("team" , TeamSchema);
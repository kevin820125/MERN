const mongoose = require('mongoose');



const departmentSchema = new mongoose.Schema({
    department_id :{
        type: Number,
        required:true

    },
    name :{
        type: String,
        required:true
    },
    teams:{
        type: Array,
    },
    inCharge:{
        type: Number,
        required:true
    }
})

module.exports = mongoose.model("Department" , departmentSchema)
const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    user_id :{
        type: Number,
        required:true

    },
    name :{
        type: String,
        required:true
    },
})

module.exports = mongoose.model("user" , UserSchema)
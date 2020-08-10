const mongoose = require('mongoose');
var Joi = require('@hapi/joi');
const PostSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        min:1

    },
    description:{
        type:String,
        required:true
    },
    date: {
        type: Date,
        default : Date.now
    },
    userID:{
        type:String
    }
})
module.exports = mongoose.model('Posts', PostSchema);
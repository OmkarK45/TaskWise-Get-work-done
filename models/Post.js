const mongoose = require('mongoose');
var Joi = require('@hapi/joi');
const PostSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        min:1
    },
    subtitle:{
        type: String
    },
    category:{
        type: String
    },
    time:{
        // due date maybe ?
    },
    tags:{
        // tags will go here
        type:[String]
    },
    description:{
        type:String,
        required:true
    },
    date: {
        type: Date
    },
    image:{
        type:String,
        required:false
    },
    userID:{
        type:String
    }
})
module.exports = mongoose.model('Posts', PostSchema);
// To do for this model
/*
1 Title, Subtitle, Due date, category, image, time, 


*/
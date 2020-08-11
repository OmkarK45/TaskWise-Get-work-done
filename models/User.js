const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:8,
        max:255
    },
    email:{
        type:String,
        required:true,
        max:255,
        min:6
    },
    password:{
        type:String,
        required:true,
        max:1024,
        min:6
    },
    date:{
        type:Date,
        default:Date.now
    }
});

function validateUser(user){
    const schema = {
        name:Joi.string().min(6).max(50).required(),
        email:Joi.string().min(5).max(255).required().email(),
        password:Joi.string().min(6).max(255).required()
    }
    return schema.validate(user);
}

exports.validate = validateUser;
module.exports = mongoose.model('User',userSchema);
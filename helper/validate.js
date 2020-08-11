const Joi = require('@hapi/joi');

const userValidSchema = Joi.object({ 
    name: Joi.string() .min(6) .required().messages({ 
        "string.base": `Username should be a type of 'text'`,
         "string.empty": `Username cannot be an empty field`,
         "any.required": `Username is a required.`
                 }),
    email: Joi.string() .min(5) .required() .email().messages({ 
        "string.base": `Not a valid email :P`,
         "string.empty": `Email field cannnot be empty.`,
         "any.required": `Email is required.`
                 }),
    password: Joi.string() .min(6) .required().messages({ 
        "string.base": `Invalid characters in password.`,
         "string.empty": `Password cannot be empty.`,
         "any.required": `Password is required.`
                 }) })

module.exports = {
    userValidSchema
}
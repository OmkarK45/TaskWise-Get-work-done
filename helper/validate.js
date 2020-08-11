const Joi = require('@hapi/joi');

const userValidSchema = Joi.object({ 
    name: Joi.string() .min(6) .required().messages({ 
        "string.base": `Username should be a type of 'text'`,
         "string.empty": `Username cannot be an empty field`,
         "any.required": `Username is a required.`
                 }),
    email: Joi.string() .min(5) .required() .email(),
    password: Joi.string() .min(6) .required() })

module.exports = {
    userValidSchema
}
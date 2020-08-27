const Post = require('../models/Post');
const User = require('../models/User');
var loadpost = {}
loadpost.load = function(req,res,next){
    console.log('delete request will be processed here')
    next()
}

module.exports = loadpost;
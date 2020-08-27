const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');
const {ensureAuthenticated, forwardAuthenticated} = require('../config/auth');

const Joi = require('@hapi/joi');
// PROTECTED HOME PAGE ROUTE
// router.get('/', forwardAuthenticated, (req, res) => res.send('success'));

router.get("/", ensureAuthenticated,async (req, res) => {
  try{
      const posts = await Post.find({userID:req.user._id});
      // res.render('dashboard',{user:req.user, posts:posts});
      res.json({
        user:req.user,
        posts:posts
      })
      // res.render('dashboard',{userPost : posts})
  }
  catch(err){
      res.json({message:err})
  }
  
});


// // Dashboard PROTECTED ROUTE
// router.get('/',ensureAuthenticated,async(req,res)=>{
//     const posts = await Post.find({userID:req.user._id});
//         res.render('dashboard',{
//             user:req.user
//         })
//   })
    

// Get create route on dashboard
// post request to new note 
// Add new Ongoing task
// Make a new form in frontend which submits to /new and then save that post and render to frontend using ejs

router.post('/new',ensureAuthenticated,(req,res)=>{

})

module.exports = router;
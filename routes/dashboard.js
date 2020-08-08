const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');
const {ensureAuthenticated, forwardAuthenticated} = require('../config/auth');

router.get('/',ensureAuthenticated,(req,res)=>{
        console.log(ensureAuthenticated);
        res.render('dashboard',{
            user:req.user
        })
  })
    

module.exports = router;
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');
const {ensureAuthenticated, forwardAuthenticated} = require('../config/auth');

// PROTECTED HOME PAGE ROUTE
// router.get('/', forwardAuthenticated, (req, res) => res.send('success'));


// Dashboard PROTECTED ROUTE
router.get('/',ensureAuthenticated,(req,res)=>{
        console.log(ensureAuthenticated);
        res.render('dashboard',{
            user:req.user
        })
  })
    

module.exports = router;
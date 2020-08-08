const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');

router.get('/',(req,res)=>{
    res.render('dashboard')
  })
    

module.exports = router;
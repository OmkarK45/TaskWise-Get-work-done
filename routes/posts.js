const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');
const Joi = require('@hapi/joi');
const {ensureAuthenticated, forwardAuthenticated} = require('../config/auth');
// Gets all the posts
router.get("/", ensureAuthenticated,async (req, res) => {
    try{
        const posts = await Post.find({userID:req.user._id});
        res.json(posts);
        // res.send(req.user);
    }
    catch(err){
        res.json({message:err})
    }
    
});

// Submits a post
router.post('/',ensureAuthenticated,async (req,res)=>{
    const post = new Post({
        title:req.body.title,
        description:req.body.description,
        userID:req.user._id,
        subtitle:req.body.subtitle,
        category:req.body.category,
        tags:req.body.tags,
        time:req.body.time,
        image:req.body.image
    });
    try{
        const savedPost = await post.save()
        res.json(savedPost);
    }
   catch(err){
    res.json({message:err})
   }
      
});

// Specific post
router.get('/:postId', async (req,res)=>{
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }
    catch(err){
        res.json({message:err});
    }
});

// Route for searching particular task
router.post('/search/:query', async(req,res)=>{
    try{
        const post = await Post.find({title:req.params.query})
        res.json(post);
    }catch(err){
        res.json({
            message:'Requested document was not found in database.'
        });
    }
})


// Delete a specific post
router.delete('/:postId', async (req,res)=>{
    try{
        const removedPost = await Post.deleteOne({_id:req.params.postId});
    }
    catch(err){
        res.json({message:err})
    }
});

// Update a post
router.patch('/:postId',async (req,res)=>{
    try{
       const updatedPost = await Post.updateOne({_id:req.params.postId},{$set:{title:req.body.title}}
        );
        res.json(updatedPost);
    }
    catch(err){
        res.json({message:err});
    }
})


module.exports = router;
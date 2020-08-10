const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');
const Joi = require('@hapi/joi');

// Gets all the posts
router.get("/", async (req, res) => {
    try{
        const posts = await Post.find({userID:req.user});
        res.json(posts);
        // res.send(req.user);
    }
    catch(err){
        res.json({message:err})
    }
    
});

// Submits a post
router.post('/',async (req,res)=>{
    const post = new Post({
        title:req.body.title,
        description:req.body.description,
        userID:req.user
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
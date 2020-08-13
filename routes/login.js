const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const passport = require('passport');
const {userValidSchema} = require('../helper/validate')


// Routes
router.get("/login", (req, res) => {
  res.render("login");
});


// Registration handle 
router.post('/register', async(req,res)=>{
  try {
    const {name, email, password} = req.body

    const {error} = await userValidSchema.validateAsync(req.body)

    if(error){
     res.render('register',()=>{
       console.log(error);
     })
    }
    const result = await User.findOne({
      email:req.body.email
    })
    if(result){
      throw err;
    }else{
      const newUser = new User({
       name,
       email,
       password
      });

      // Hashing the password 
      bcrypt.genSalt(10, (err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
          if(err) throw err;

          // Set pw to hashed
          newUser.password = hash;

          // Save the user
          newUser.save()
            .then(user=>{
              req.flash('success_msg','You are now registered and can log in.');
              res.redirect('/user/login');
            })
            .catch(err=>console.log(err));
        })
      })

    }
    
  } catch (error) {
    // res.render('register',{
    //   errors:error
    // })
    // res.json(error.details[0].message);
    res.render('register',{
     error :  error.details[0].message
    })
  }
})




// Login handle 
// Temporary commented for dashboard design
router.post("/login", (req, res,next) => {
  passport.authenticate('local',{
    successRedirect:'/dashboard',
    failureRedirect:'/user/login',
    failureFlash:true
  })(req,res,next);
});


router.get("/register", async (req, res) => {
  res.render("register");
});

router.get('/logout',(req,res)=>{
  req.logout();
  req.flash('success_msg','You are logged out.');
  res.redirect('/user/login')
})

module.exports = router;

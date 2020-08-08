const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const passport = require('passport');
router.get("/login", (req, res) => {
  res.render("login");
});


router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  let errors = [];

  if (name === "" || email === "" || password === "") {
    errors.push({
      msg1: "Please enter all the fields",
    });
  }

  if (!name || !email || !password) {
    errors.push({ msg2: "Please enter all fields" });
  }

  if (password.length < 6) {
    errors.push({ msg3: "Password must be at least 6 characters" });
  }

  if (errors.length > 0) {
    res.render("register", {
      errors,
      name,
      email,
      password,
    });
    console.log(errors);
  } else {
    //   res.send('pass');
    // Validation Pass
    User.findOne({
      email: email,
    }).then((user) => {
      if (user) {
        // User Exist
        errors.push({
          msg: "Email is already registered",
        });
        res.render("register", {
          errors,
          name,
          email,
          password,
        });
      } else {
        const newUser = new User({
          name: name,
          email: email,
          password: password,
        });
        // console.log(newUser);
        // res.send('Hello')

        // HASH PASSWORD
        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(newUser.password, salt, (err, hash) => {
              if(err) throw err;
            // Set password to hashed
              newUser.password = hash;
            // Save the user 
            newUser.save()
                .then(user=>{
                    req.flash('success_msg','You are now registered and can log in.');
                    res.redirect('/user/login');
                })
                .catch(err=>console.log(err));

          })
        );
      }
    });
  }
});

// Login handle 
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

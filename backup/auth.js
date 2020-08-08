const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { registerValidation, loginValidation } = require("../routes/validation");
const bcrypt = require("bcryptjs");

// We get a login request
router.get('/login',(req,res)=>{
    res.render('login');
})


router.get('/register',(req,res)=>{
    res.render('register');
})




// Register route
router.post("/register", async (req, res) => {
  // validate user registration
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  // Check if user already exist
  const emailExist = await User.findOne({
    email: req.body.email,
  });
  if (emailExist) {
    return res.send({ message: "Email already exist" });
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Create new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  // SAVE USER IN DATABASE
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {

  // validate user login
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // Check if email exist
  const user = await User.findOne({
    email: req.body.email,
  });
  if (!user) {
    return res.send({ message: "Email not found" });
  }
  //  PASSWORD IS CORRECT
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) {
    return res.send({ message: "Invalid Password" });
  }

  //   Create and assign a token
  const token = jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
  res.header('auth-token',token).send(token);

  
  });

module.exports = router;

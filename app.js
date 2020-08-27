const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const methodOverride = require('method-override')
const session = require('express-session');
const cors = require('cors');
const app = express();
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const postRoute = require('./routes/posts');
const authRoute = require('./routes/login');
const dashboardRoute = require('./routes/dashboard');
const passport = require("passport");
require('dotenv/config')

require('./passport-config')(passport);
// Use and Set App dependencies

app.use(methodOverride('_method'))
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }, { useUnifiedTopology: true }));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');

// Express Session Middleware
app.use(session({
  secret: 'oscar',
  resave: true,
  saveUninitialized: true
}))
//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect Flash
app.use(flash());

// Global vars
app.use((req,res,next)=>{
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
})
// Middlewares (Function that execute when routes are hit)
app.use('/posts', postRoute);
app.use('/user',authRoute);
app.use('/dashboard',dashboardRoute);
// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION_LOCAL,
  { useNewUrlParser: true, useUnifiedTopology: true ,useCreateIndex:true},
  () => {
    console.log("Connected to DB");
  }
);

// Home Page
app.get("/", (req, res) => {
    res.render('landing');
});
  
app.get('/dashboardnew',(req,res)=>{
  res.render('dashboard2');
})

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

const axios = require("axios");
const router = require("express").Router();
const passport = require('passport');
const db = require("../models")
// router.get("/#", (req, res) => {
//   axios
//     .get("#", { params: req.query })
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
// });

// Register User
router.post('/register', function(req, res){
    var password = req.body.password;
    var password2 = req.body.password2;
  
    
      var newUser = new db.User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
      });
  
      db.User.createUser(newUser, function(err, user){
        if(err) throw err;
        res.send(user).end()
      });
     
  });

  
// Endpoint to login
router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    res.send(req.user);
  }
);

// Endpoint to get current user
router.get('/user', function(req, res){
  res.send(req.user);
})


// Endpoint to logout
router.get('/logout', function(req, res){
  req.logout();
  res.send(null)
});

module.exports = router;

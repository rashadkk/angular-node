const jwt = require('jsonwebtoken');
const config = require('../config/environment');
const User = require('../routes/api/user/user.model');
const auth = require('./auth.service');
const comparePasswords = require('./helper').comparePasswords;
const encryptPassword = require('./helper').encryptPassword;
module.exports = {
  login: async function(req,res,next){
    if (!req.body.username || !req.body.password) {
      return res.status(401).json({ message: "You have entered an invalid username or password" });
    }
    let user;
    try {
        user = await User.findOne({username: req.body.username});
        await comparePasswords(req.body.password, user.password);
        // if (user.u_active != 1) 
        //   return res.status(403).json({ message: 'You do not currently have an active account. Please contact your administrator.' });
           
    } catch (error) {
      console.log(error)
        return res.status(401).json({status: false, message: 'Incorrect Username or Password' })
    }
    req.payload = { id: user.id, loggedAs: user.u_role };
    next();
  },

  register: async function(req,res){
    req.checkBody('u_name', 'Invalid data').notEmpty(); 
    req.checkBody('username', 'Invalid data').notEmpty();
    req.checkBody('password', 'Invalid data').notEmpty();

    let errors = req.validationErrors();
    if (errors.length)
      return res
        .status(400)
        .json({ status: false, error: errors[0].msg})

    try {
      let  password = await encryptPassword(req.body.password);
      await User.create({
        u_name: req.body.u_name,
        username: req.body.username,
        password: password,
        u_active: 1,
        u_role: 'admin'
      });
      res.status(200).json({status: true, message: 'User Registered'});
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  sendToken: async(req, res) =>{
    let token = jwt.sign(req.payload, config.secretOrKey);
    res.cookie('jwt', token, { httpOnly: true, signed: true }).status(200).send({ status: true, message: "Succesfully logged in" });
  },
  
  clearCookie: async(req, res) =>{
    res.clearCookie('jwt').json({ status: true, message: 'logout'});
  },
  sendUser: async (req, res) =>{
    res.send(req.user)
  }
}

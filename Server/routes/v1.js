const express = require('express');
const router = express.Router();
const userController = require('../controller/user-controller');
const passport = require('passport');
const multer = require('multer');
const User = require('../model/user-model');
const { body, validationResult, check } = require('express-validator');

router.post('/register',
 body('email', 'Email should not be empty').not().isEmpty(),
 body('firstname', 'Firstname should not be empty').not().isEmpty(),
 body('lastname', 'Lastname should not be empty').not().isEmpty(),
 body('mobile', 'Mobile number should be 11 number').isLength({min: 11}),
 body('address', 'Address should not be empty').not().isEmpty(),
 body('city', 'City should not be empty').not().isEmpty(),
 body('password', 'Password should not be empty').not().isEmpty(),
 body('password', 'Password should be more than 8 char or numbers').isLength({min: 8}),
 body('confirmpassword').not().equals('password').withMessage('Password does not match'),
 userController.Register)

 router.post('/login', userController.Login)
 router.post('/editprofile', userController.EditProfile)




module.exports = router;
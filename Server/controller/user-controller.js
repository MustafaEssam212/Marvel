const User = require('../model/user-model');
const jwt = require('jsonwebtoken');
const { body, validationResult, check } = require('express-validator');
const Chats = require('../model/chat-model')

const mongoose = require('mongoose')
const userController = {};

userController.Register =   async (req, res, next) => {
    

   
   const errors = validationResult(req)
    if (!errors.isEmpty()) {
        const ArrError = errors.array();
       return  res.send(ArrError) 

   }

  

    const {firstname, lastname, password, confirmpassword, mobile, email, secondmobile, address, city} = req.body;
    const newUser = new User({
        firstname,
        lastname,
        password,
        mobile,
        email,
        secondmobile,
        address,
        city,
        
    })
    
    
    User.findOne({email: email},  (err, result)=>{
        if(result){
            res.send({message:'Email Already Taken'})
           return
        }else{
            const Chat = new Chats({
                member: email,
                message: []
            })
            const user =  newUser.save();
            Chat.save();
            return res.send({ message:  `Register Successfully` })
        }

    })

   
}


userController.Login =  async (req, res, next) => {
    const {email, password} = req.body;
   
        try{
            const user = await User.findOne({email});
            if(!user){
                res.send({
                    message:  `The Email ${email} Not Found`
                })
            }else{
                user.isPasswordMatch(password, user.password, (err, success)=>{
                    if(success){
                        const secret = process.env.JWT_SECRET;
                        const expire = process.env.JWT_EXPIRATION;
                        
                        const token = jwt.sign({_id: user._id}, secret, {expiresIn: expire});
                           return  res.send({token, user}) 
                    }
                    res.send({
                        message : `Invaild Email or Password`
                    })
            });
            }
                
           
        }catch(e){
            next(e)
        }
}

userController.EditProfile = async (req, res, next) =>{
    const firstname = req.body.FirstName;
    const lastname = req.body.LastName;
    const mobile = req.body.Mobile;
    const secondmobile = req.body.SecondMobile;
    const address = req.body.Address;
    const city = req.body.City;
    const oldpassword = req.body.OldPassword;
    const password = req.body.NewPassword;
    const email = req.body.email;

    const newData = {
        firstname,
        lastname,
        mobile,
        secondmobile,
        address,
        city,
        password
    }

    const newData2 = {
        firstname,
        lastname,
        mobile,
        secondmobile,
        address,
        city,
    }

    if(oldpassword){
        if(password){
            const user = await User.findOne({email: email});
            if(!user){
                res.send({
                    message: 'There is a problem'
                })
            }else{
                user.isPasswordMatch(oldpassword, user.password, (err, success)=>{
                    if(success){
                        User.updateOne({email: email}, {$set: newData}, (err, result)=>{
                            if(result){
                                res.send({
                                    message: 'User Updated'
                                })
                            }else{
                                res.send({
                                    message: 'Can not updated your data'
                                })
                            }
                        })
                    }else{
                        res.send({
                            message: 'Old password is incorrect'
                        })
                    }
                })
            }
        }else{
            res.send({
                message: 'New password is empty'
            })
        }
    }else{
        User.updateOne({email: email}, {$set: newData2}, (err, result)=>{
            if(result){
                res.send({
                    message: 'User Updated'
                })
            }else{
                res.send({
                    message: 'Can not updated your data'
                })
            }
        })
    }
    
}









module.exports = userController;
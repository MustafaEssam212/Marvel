const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
    firstname : {type: String, require: true},
    lastname : {type: String, require: true},
    email : {type: String, require: true},
    password: {type: String, require: true},
    mobile: {type: String, require: true},
    secondmobile: {type: String},
    address: {type: String, require: true},
    city: {type: String, require: true},
    chat: [],
});

UserSchema.methods.isPasswordMatch = function (password, hashed, callback){
  bcrypt.compare(password, hashed, (err, success)=>{
      if(err){
        return callback(err);
      }

      callback(null, success);
  });
};

UserSchema.pre('save', async function(next) {
  //Check if password is not modified
  if (!this.isModified('password')) {
    return next();
  }

  //Encrypt the password
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
    next();
  } catch (e) {
    return next(e);
  }
});


UserSchema.pre('updateOne', async function(next) {
  const data = this.getUpdate();
  
  if(data.$push){
    next();
    
  }else{
   
      const password = this.getUpdate().$set.password
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hashSync(password, salt);
      this.getUpdate().$set.password = hash;
      next();
  
  }
  
       
});

UserSchema.methods.toJSON = function(){
    const userObject = this.toObject(); 
    delete userObject.password;
    return userObject; 
  };

module.exports = mongoose.model('User', UserSchema);
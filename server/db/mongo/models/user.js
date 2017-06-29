/**
 * Defining a User Model in mongoose
 * Code modified from https://github.com/sahat/hackathon-starter
 */

import bcrypt from 'bcrypt-nodejs';
import mongoose from 'mongoose';

// Other oauthtypes to be added

/*
 User Schema
 */

const UserSchema = new mongoose.Schema({
	username: { 
		type: String, 
		unique: true, 
		required: true, 
		lowercase: true 
	},
	password: {
		type: String,
		required: true 
	},
	group: { 
		type: mongoose.Schema.Types.ObjectId, 
		required: true 
	},
	name: {
		type: {
      last: String,
      first: {
        type: String,
        required: true 
      },
      middle: String
    },
		required: true 
	},
	birthday: Date,
	avatar: String
});

function encryptPassword(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  return bcrypt.genSalt(5, (saltErr, salt) => {
    if (saltErr) return next(saltErr);
    return bcrypt.hash(user.password, salt, null, (hashErr, hash) => {
      if (hashErr) return next(hashErr);
      user.password = hash;
      return next();
    });
  });
}

/**
 * Password hash middleware.
 */
UserSchema.pre('save', encryptPassword);

UserSchema.virtual('userId')
          .get(function(){ return this.id});

/*
 Defining our own custom document instance method
 */
UserSchema.methods = {
  comparePassword(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      if (err) return cb(err);
      return cb(null, isMatch);
    });
  }
};

/**
 * Statics
 */

UserSchema.statics = {};

export default mongoose.model('User', UserSchema);
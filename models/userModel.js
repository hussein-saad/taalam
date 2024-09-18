const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
  },
  username: {
    type: String,
    unique: true,
    immutable: true,
  },
  role: {
    type: String,
    enum: ['admin', 'student', 'teacher'],
    default: 'student',
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],
    minlength: [6, 'Password must be at least 6 characters long'],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not the same',
    },
  },
  photo: {
    type: String,
    default: 'default.jpg',
  },
  passwordChangedAt: {
    type: Date,
  },
  passwordResetToken: {
    type: String,
  },
  passwordResetExpires: {
    type: Date,
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  counter: {
    type: Number,
    default: 0,
    unique: true,
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;

  next();
});

userSchema.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) {
    return next();
  }
  // - 1 second to make sure the token is created after the password is changed
  this.passwordChangedAt = Date.now() - 1000;

  next();
});

userSchema.pre('save', async function (next) {
  if (this.isNew) {
    const highestCounterUser = await this.constructor.findOne().sort('-counter');
    this.counter = highestCounterUser ? highestCounterUser.counter + 1 : 0;
    this.username = `stu${String(this.counter).padStart(4, '0')}`;
  }
  next();
});

userSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

userSchema.methods.checkPassword = async function (
  candidatePassword,
  correctPassword
) {
  return await bcrypt.compare(candidatePassword, correctPassword);
};

userSchema.methods.isPasswordChanged = function (JWTTimestamp) {
  if (!this.passwordChangedAt) {
    return false;
  }

  const passwordChangedTimestamp = this.passwordChangedAt.getTime() / 1000;

  return passwordChangedTimestamp > JWTTimestamp;
};


const User = mongoose.model('User', userSchema);

module.exports = User;
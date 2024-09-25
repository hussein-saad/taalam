const util = require('util');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');

const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const CustomError = require('./../utils/CustomError');

exports.loginLimiter = rateLimit({
  limit: 5,
  windowMs: 60 * 60 * 1000,
  message: 'too many login attempts, please try again in an hour',
});

const sendToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = sendToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') {
    cookieOptions.secure = true;
  }

  // res.cookie('jwt', token, cookieOptions);

  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: { user },
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const user = await User.create({
    name: req.body.name,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    passwordChangedAt: req.body.passwordChangedAt,
    photo: req.body.photo,
    role: req.body.role,
    username: req.body.username,
  });

  createSendToken(user, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username) {
    return next(new CustomError('لا يوجد اسم المستخدم', 400));
  }

  if (!password) {
    return next(new CustomError('لا يوجد كلمه مرور', 400));
  }

  const user = await User.findOne({ username }).select('+password');

  if (!user || !(await user.checkPassword(password, user.password))) {
    return next(new CustomError('اسم المستخدم او كلمه المرور غير صحيحه', 401));
  }

  createSendToken(user, 200, res);
});

exports.isLoggedIn = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      const decoded = await util.promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      );

      const user = await User.findById(decoded.id);
      if (!user) {
        return next();
      }

      if (user.isPasswordChanged(decoded.iat)) {
        return next();
      }
      res.locals.user = user;
      return next();
    } catch (err) {
      console.log(err.message);
      return next();
    }
  }
  next();
};

exports.logout = (req, res) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ status: 'success' });
};

exports.updatePassword = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id).select('+password');

  if (!(await user.checkPassword(req.body.currentPassword, user.password))) {
    return next(new CustomError('wrong password, please try again', 401));
  }

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();

  createSendToken(user, 200, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    next(new CustomError('please log in to see the resources', 401));
  }

  const decode = await util.promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );

  const user = await User.findById(decode.id);

  if (!user) {
    return next(new CustomError('the user no longer exist', 401));
  }

  if (user.isPasswordChanged(decode.iat)) {
    return next(
      new CustomError('user password has been changed, please login agin', 401)
    );
  }

  req.user = user;
  res.locals.user = user;

  next();
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new CustomError("you don't have the permission to do this action", 403)
      );
    }

    next();
  };
};

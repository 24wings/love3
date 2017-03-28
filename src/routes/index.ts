import express = require('express');
import moment = require('moment');

import { topicModel, ITopic, IUser, userModel, recordModel, IRecord } from '../models';

var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {

  if (res.locals.user) {
    var user = await userModel.findById(res.locals.user._id).exec();
    var record = await recordModel.findOne({ user: user._id }).exec();
    console.log(user, record);
    res.render('index', {
      user,
      record
    });
  } else {
    res.redirect('/signup');
  }



});

export { router as indexRouter };
export { signinRouter } from './signin';
export { signupRouter } from './signup';
export { studentIndexRouter } from './student/index';
export { signoutRouter } from './signout';
export { createRouter } from './create';
export { topicRouter } from './topic';


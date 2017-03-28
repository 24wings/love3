import mongoose = require('mongoose');
mongoose.connect('mongodb://120.77.169.182/test');

export { commentModel, IComment } from './comment';
export { userModel, IUser } from './user';
export { ITopic, topicModel } from './topic';
export { recordModel, IRecord } from './record';

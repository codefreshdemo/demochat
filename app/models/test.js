var debug = require('debug')('model->test');
var bcrypt = require('bcryptjs'),
    crypto = require('crypto'),
    md5 = require('md5'),
    hash = require('node_hash'),
    mongoose = require('mongoose'),
    uniqueValidator = require('mongoose-unique-validator'),
    validate = require('mongoose-validate'),
    settings = require('./../config');

var ObjectId = mongoose.Schema.Types.ObjectId;
debug('in test model');
var TestSchema = new mongoose.Schema({
  testField: {
      type: String,
      required: true//,
  //    trim: true
  }
});

module.exports = mongoose.model('Test', TestSchema);

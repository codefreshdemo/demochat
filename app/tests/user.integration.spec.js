var debug = require('debug')('users integration test');
var assert = require('assert');


debug('test file loaded');
/*if (process.env.NO_MOCHA){
  function describe(name, callback){
    callback(function done (){});
  }
  var beforeEach = function describe(callback){
    callback(function done (){});
  };
}*/
//var afterEach = beforeEach;
describe.skip('user CRUD tests', function(){

  var shortId = require('shortid');
  var db = 'mongodb://mongo:27017/hp_mongo';
  debug('models->' + JSON.stringify(models));
  var mongoose = require('mongoose');
  var models =   require('../models');//jshint ignore:line
  var Entity = models.test; //mongoose.model('User');
  assert (Entity);
  var user =  {};
  var guid = shortId.generate();
  beforeEach(function(done){
    /*mongoose.connect(db, function(err) {

        if (err) {
            console.log(err);
            throw err;
        }

        console.log('mongo is connected');
        done();
      });*/

      //var User = mongoose.model('User');

    mongoose.connection.on('error', function (err) {
        throw new Error(err);
    });

    mongoose.connection.on('disconnected', function() {
        //throw new Error('Could not connect to database');
        done();//'cound not connect');
    });
  });

  afterEach(function(done){
// find each person with a last nam e matching 'Ghost', selecting the `name` and `occupation` fields

    console.log('after each');
    done();
    console.log('find user' + user.uid);
    Entity.findOne({ 'uid': user.uid}, function (err, user) {
             debug('after user was removed');

            if (err) throw Error();
            console.dir(user);
            //console.log('%s was removed', user.username); // Space Ghost is a talk show host.
             debug('user was deleted: ' + user.username);
            done();
          });

  });


  it('create user', function(done){

    console.log('create user test')
    //user.provider = 'github';
    //user.username = 'verchol' + guid;
    var id =  require('node-uuid').v4();
    debug('id'  + id);
    //user.uid = id;
    user.testField = "moshe";// + guid;
    /*user.email = "verchol"  + guid  + '@gmail.com';
    user.passowrd = "welcome1234!^";
    user.firstName = 'Oleg1';
    user.lastName = 'Verhovsky1';
    user.displayName = 'gever';
    user.creationDate = new Date();*/
    var enitytToSave = new Entity(user);
    /*Object.keys(user).forEach(function(key) {
        debug('key:' + key);
        userToSave.set(key, user[key]);
    });*/

    debug(JSON.stringify(user));
  /*  User.findByToken(username, function(err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, user);
    });*/
    enitytToSave.save(function(err) {
        done(err);
        debug('after save:' + err );
        if (err) {
            console.log('saved process finished with error')
            return done(err);
        }
        debug('saved succesfully');
        console.log('saved succesfully');
        mongoose.connection.close();
        return done();
    });

  });

});

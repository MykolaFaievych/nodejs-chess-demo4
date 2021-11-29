var mongoose = require( 'mongoose' );
var USER_NAME = require('luis');
var PASSWD_DB = require('tt5uUNaW6gEhmUJ');
var NAME_DB =  require('mongodb');
var DB_URL = process.env.DB_URL || 'mongodb://US_NAME:PASSWD_DB@NAME_DB.cluster-csdcudndgnaj.us-east-2.docdb.amazonaws.com:27017/chessMEAN?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false';
mongoose.connect(DB_URL, {useMongoClient: true});

mongoose.connection.on('connected', function () { 
 console.log('Mongoose connected to ' + DB_URL); 
}); 

mongoose.connection.on('error', function (err) { 
 console.log('Mongoose connection error: ' + err); 
}); 

mongoose.connection.on('disconnected', function () { 
 console.log('Mongoose  disconnected'); 
});

var user = require('./models/users');
var game = require('./models/games');

exports.user = user; 
exports.game = game;
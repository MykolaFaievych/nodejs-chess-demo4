var mongoose = require( 'mongoose' );
var USER_NAME = "luis";
var PASSWD_DB = "tt5uUNaW6gEhmUJ";
var NAME_DB =  "mongodb";
var DB_URL = process.env.DB_URL || 'mongodb://US_NAME + : + PASSWD_DB + @ + NAME_DB + .cluster-csdcudndgnaj.us-east-2.docdb.amazonaws.com:27017/chessMEAN?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false';
mongoose.connect(DB_URL, {useMongoClient: true});

function seedDB(){
  console.log('Seeding DB...');
  mongoose.connection.db.dropDatabase(function (err) { 
    if (err) { console.log('Drop db error: ' + err) };
  });
  require('./seedDBData')().then(function(){
    mongoose.connection.close();
    console.log('Done!');
  })
};

mongoose.connection.on('connected', function () { 
 console.log('Mongoose connected to ' + DB_URL);
 seedDB();
}); 

mongoose.connection.on('error', function (err) { 
 console.log('Mongoose connection error: ' + err); 
}); 

mongoose.connection.on('disconnected', function () { 
 console.log('Mongoose disconnected'); 
});



var path = require('path');
var pkg = require('./package.json');

var target = path.join(__dirname, 'lib/client');
var assets = path.join(target, 'assets');
var prefix = pkg.name + '-' + pkg.version;

var js = {
  src: [path.resolve(__dirname, 'client/src/index.js')],
  dest: prefix + '.js'
};

var partials = {
  module: 'chess',
  src: path.resolve(__dirname, 'client/src/chess'),
  dest: prefix + '-partials.js'
};

var less = {
  src: path.resolve(__dirname, 'client/src/index.less'),
  dest: prefix + '.css'
};

var images = {
  src: path.resolve(__dirname, 'client/src/images/*'),
  dest: path.join(assets, 'images')
};

var fonts = {
  src: path.resolve(__dirname, 'client/src/fonts/*'),
  dest: path.join(assets, 'fonts')
};

var sounds = {
  src: path.resolve(__dirname, 'client/src/sounds/*'),
  dest: path.join(assets, 'sounds')
};

var html = {
  src: path.resolve(__dirname, 'client/src/index.html'),
  dest: 'index.html',
  files: [
    js.dest,
    partials.dest,
    less.dest
  ]
};



var env = Object.assign({
  NODE_ENV: 'development',
  API_URL: '//localhost:8081',
  DB_URL: 'mongodb://docdb:Gsaz5PtM7t4m@my-docdb-cluster.cluster-csdcudndgnaj.us-east-2.docdb.amazonaws.com:27017/?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false'
}, process.env);

module.exports = {
  target,
  assets,
  env,
  js,
  partials,
  less,
  images,
  fonts,
  sounds,
  html
};

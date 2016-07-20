var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/Loc8r';
mongoose.connect(dbURI);

mongoose.connection.on('connected', function() {
    console.log('mongoose connected to' + dbURI);
});
mongoose.connection.on('error', function(err) {
    console.log('error while connecting' + err);
});
mongoose.connection.on('disconnected', function() {
    console.log('mongoose disconnected');
});
gracefulShutdown = function(msg, callback) {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};

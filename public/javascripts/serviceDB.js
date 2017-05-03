/**
 * Created by Gaga on 03/05/2017.
 */
'use strict';
var url = "mongodb://localhost/";
var db = "blog";
// Declare app level module which depends on views, and components
var serviceDB = {};
var mongoose = require('mongoose');

serviceDB.openDB = function () {
    mongoose.connect(url + db, function(err) {
        if (err) { return false; throw err; }
        else{return true;}
    });
};
serviceDB.closeDB = function () {
    mongoose.connection.close();
    return true
};

module.exports = serviceDB;
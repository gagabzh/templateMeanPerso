/**
 * Created by Gaga on 30/04/2017.
 */
var express = require('express');
var router = express.Router();

/**
 * Created by Gaga on 30/04/2017.
 */
// Inclusion de Mongoose
var mongoose = require('mongoose');
var CommentaireArticleModel = require('../Public/javascripts/mangoConnect');

router.get('/', function(req, res, next) {
// On se connecte à la base de données
// N'oubliez pas de lancer ~/mongodb/bin/mongod dans un terminal !
    mongoose.connect('mongodb://localhost/blog', function(err) {
        if (err) { throw err; }
    });
    CommentaireArticleModel.find(null, function (err, comms) {
        if (err) {
            mongoose.connection.close();
            throw err;
        }
        // comms est un tableau de hash
        //console.log(comms);
        var  comments = comms;
        var nbre = 4;
        res.send(comments);
        mongoose.connection.close();
    });
}).get('/gaga', function(req, res, next) {
    mongoose.connect('mongodb://localhost/blog', function(err) {
        if (err) { throw err; }
    });
    CommentaireArticleModel.find({pseudo : 'Gaga'}, function (err, comms) {
        if (err) {
            mongoose.connection.close();
            throw err;
        }
        // comms est un tableau de hash
        //console.log(comms);
        var  comments = comms;
        var nbre = 4;
        res.send(comments);
        mongoose.connection.close();
    });
});

module.exports = router;
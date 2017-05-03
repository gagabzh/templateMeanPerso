/**
 * Created by Gaga on 30/04/2017.
 */
var express = require('express');
var router = express.Router();

/**
 * Created by Gaga on 30/04/2017.
 */
// Inclusion de Mongoose
var CommentaireArticleModel = require('../Public/javascripts/commentaireArticleSchema');
var serviceDB = require('../Public/javascripts/serviceDB.js');

router.get('/', function(req, res, next) {
// On se connecte à la base de données
// N'oubliez pas de lancer ~/mongodb/bin/mongod dans un terminal !
    serviceDB.openDB();
    CommentaireArticleModel.find(null, function (err, comms) {
        if (err) {
            serviceDB.closeDB();
            throw err;
        }
        // comms est un tableau de hash
        //console.log(comms);
        var  comments = comms;
        var nbre = 4;
        res.send(comments);
        serviceDB.closeDB();
    });
}).get('/gaga', function(req, res, next) {
    serviceDB.openDB();
    CommentaireArticleModel.find({pseudo : 'Gaga'}, function (err, comms) {
        if (err) {
            serviceDB.closeDB();
            throw err;
        }
        // comms est un tableau de hash
        //console.log(comms);
        var  comments = comms;
        var nbre = 4;
        res.send(comments);
        serviceDB.closeDB();
    });
});

module.exports = router;
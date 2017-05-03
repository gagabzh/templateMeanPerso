/**
 * Created by Gaga on 30/04/2017.
 */
var express = require('express');
var router = express.Router();

// Inclusion de Mongoose
var mongoose = require('mongoose');
var CommentaireArticleModel = require('../Public/javascripts/mangoConnect');

router.get('/', function(req, res, next) {
    mongoose.connect('mongodb://localhost/blog', function(err) {
        if (err) { throw err; }
    });
    CommentaireArticleModel.find(null, function (err, comms) {
        if (err) {
            mongoose.connection.close();
            throw err;
        }
        var comments = comms;
        var nbre = comments.length;
        mongoose.connection.close();
        res.render('mongo', {commList : comments, commNb : nbre});
    });
}).get('/init',function(req, res, next) {
    mongoose.connect('mongodb://localhost/blog', function (err) {
        if (err) {
            throw err;
        }
    });
    // On crée une instance du Model
    var monCommentaire = new CommentaireArticleModel({ pseudo : 'Atinux' });
    monCommentaire.contenu = 'Salut, super article sur Mongoose !';
    var monCommentaire2 = new CommentaireArticleModel({ pseudo : 'Gaga' });
    monCommentaire2.contenu = 'Un autre article sur Mongoose !';

    // On le sauvegarde dans MongoDB !
    monCommentaire.save(function (err) {
        if (err) {
            mongoose.connection.close();
            throw err;
        }
        console.log('Commentaire ajouté avec succès !');
        monCommentaire2.save(function (err) {
            if (err) {
                mongoose.connection.close();
                throw err;
            }
            console.log('Commentaire 2 ajouté avec succès !');
            // On se déconnecte de MongoDB maintenant
            mongoose.connection.close();
            res.redirect('/mongo');
        });
    });

}).get('/modify',function(req, res, next) {
    mongoose.connect('mongodb://localhost/blog', function (err) {
        if (err) {
            throw err;
        }
    });
    CommentaireArticleModel.update({ pseudo : 'Atinux'}, { pseudo : 'Nikita' }, { multi : true }, function (err) {
        if (err) {
            mongoose.connection.close();
            throw err;
        }
        console.log('Pseudos modifiés !');
        mongoose.connection.close();
        res.redirect('/mongo');
    });
}).get('/supress',function(req, res, next) {
    mongoose.connect('mongodb://localhost/blog', function (err) {
        if (err) {
            throw err;
        }
    });
    CommentaireArticleModel.remove({ pseudo : 'Nikita' }, function (err) {
        if (err) {
            mongoose.connection.close();
            throw err;
        }
        console.log('Commentaires avec pseudo Nikita supprimés !');
        mongoose.connection.close();
        res.redirect('/mongo');
    });
});

module.exports = router;
/**
 * Created by Gaga on 30/04/2017.
 */
var express = require('express');
var router = express.Router();

// Inclusion de Mongoose
var CommentaireArticleModel = require('../Services/commentaireArticleSchema');
var serviceDB = require('../Services/serviceDB.js');

router.get('/', function(req, res, next) {
    serviceDB.openDB();
    CommentaireArticleModel.find(null, function (err, comms) {
        if (err) {
            serviceDB.closeDB()
        }
        var comments = comms;
        var nbre = comments.length;
        serviceDB.closeDB();
        res.render('mongo', {commList : comments, commNb : nbre});
    });
}).get('/init',function(req, res, next) {
    serviceDB.openDB();
    // On crée une instance du Model
    var monCommentaire = new CommentaireArticleModel({ pseudo : 'Atinux' });
    monCommentaire.contenu = 'Salut, super article sur Mongoose !';
    var monCommentaire2 = new CommentaireArticleModel({ pseudo : 'Gaga' });
    monCommentaire2.contenu = 'Un autre article sur Mongoose !';

    // On le sauvegarde dans MongoDB !
    monCommentaire.save(function (err) {
        if (err) {
            serviceDB.closeDB();
            throw err;
        }
        console.log('Commentaire ajouté avec succès !');
        monCommentaire2.save(function (err) {
            if (err) {
                serviceDB.closeDB();
                throw err;
            }
            console.log('Commentaire 2 ajouté avec succès !');
            // On se déconnecte de MongoDB maintenant
            serviceDB.closeDB();
            res.redirect('/mongo');
        });
    });

}).get('/modify',function(req, res, next) {
    serviceDB.openDB();
    CommentaireArticleModel.update({ pseudo : 'Atinux'}, { pseudo : 'Nikita' }, { multi : true }, function (err) {
        if (err) {
            serviceDB.closeDB()
            throw err;
        }
        console.log('Pseudos modifiés !');
        serviceDB.closeDB();
        res.redirect('/mongo');
    });
}).get('/supressAll/*/*',function(req, res, next) {
    serviceDB.openDB();
    var datas = req.originalUrl.split('/');
    var obj = {};
    obj[datas[3]] = datas[4];
    CommentaireArticleModel.remove(obj, function (err) {
        if (err) {
            serviceDB.closeDB();
            throw err;
        }

        console.log('Commentaires avec pseudo Nikita supprimés !');
        console.log();
        res.redirect('/mongo');
    });
});

module.exports = router;
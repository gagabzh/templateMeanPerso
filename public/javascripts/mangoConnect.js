// Inclusion de Mongoose
var mongoose = require('mongoose');
// Création du schéma pour les commentaires
var Schema = mongoose.Schema;
var commentaireArticleSchema = new Schema({
    pseudo : { type : String, match: /^[a-zA-Z0-9-_]+$/ },
    contenu : String,
    date : { type : Date, default : Date.now }
});

// Création du Model pour les commentaires
module.exports = mongoose.model('commentaires', commentaireArticleSchema);
/**
 * Created by bgarnier on 04/05/2017.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('angularREST', {});
});

module.exports = router;
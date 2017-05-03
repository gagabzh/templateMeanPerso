/**
 * Created by Gaga on 29/04/2017.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('angular', {});
});

module.exports = router;

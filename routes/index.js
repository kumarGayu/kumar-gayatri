var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.get('/questions', function(req, res, next) {
  	var db = req.db;
    var collection = db.get('questions');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

router.get('/answers', function(req, res, next) {
  	var db = req.db;
  	var questionid = req.get('id')
    var collection = db.get('answers');
    collection.find({'id':id},{},function(e,docs){
        res.json(docs);
    });
});

module.exports = router;

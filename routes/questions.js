var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/questions', function(req, res, next) {
  	var db = req.db;
    var collection = db.get('questions');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

module.exports = router;

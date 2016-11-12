var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/answers', function(req, res, next) {
    var db = req.db;
    var questionid = req.get('id')
    var collection = db.get('answers');
    collection.find({'id':id},{},function(e,docs){
        res.json(docs);
    });
});

module.exports = router;

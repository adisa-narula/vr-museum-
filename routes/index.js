var express = require('express');
var router = express.Router();
var visited = ["hidden", "hidden", "hidden", "hidden", "hidden"];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'VR Zoo', dino1: visited[0], dino2: visited[1], dino3: visited[2], dino4: visited[3], dino5: visited[4]});
});

router.get('/dino-1', function(req, res, next) {
	visited[0] = "visible";
    res.render('success', {name: 'Dino'});
});

router.get('/dino-2', function(req, res, next) {
	visited[1] = "visible";
    res.render('success', {name: 'Dino'});
});

router.get('/dino-3', function(req, res, next) {
	visited[2] = "visible";
    res.render('success', {name: 'Dino'});
});

router.get('/dino-4', function(req, res, next) {
	visited[3] = "visible";
    res.render('success', {name: 'Dino'});
});

router.get('/dino-5', function(req, res, next) {
	visited[4] = "visible";
    res.render('success', {name: 'Dino'});
});

router.get('/refresh', function(req, res,next){
	//re set all element
	visited = ["hidden", "hidden", "hidden", "hidden", "hidden"];
	res.render('refresh'); 

});

module.exports = router;

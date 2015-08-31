var express = require('express');
var Question = require('../models/question');
var Choice = require('../models/choice');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('hogan', { title: 'hogan' });
});

router.get('/polls', function(req, res, next){
	Question.find({}).populate('choice').exec(function(err, docs) {
		res.render('index', {questions: docs});
	});
	/*function(err, docs){
		res.render('index', {questions: docs});
	});
	/*questions = Question.find({}).populate('choices');
	console.log(questions);
	//res.json(questions);
	res.render('index', { questions: questions });*/
});

router.get('/add', function(req, res, next){
	res.render('add');
});

router.post('/add', function(req, res, next){
	var body = req.body;
	var question = new Question({text: body.text});
	question.save(function(err) {
			if (err) return handleError(err);
		});
	console.log(question);
	//I need to get this for loop to work on submit
	for (i=0; i<req.length; i++) {
		console.log(choice);
		var chid = "choice".concat(String(i+1));
		var choice = new Choice({text: body[chid], votes : 0});
		choice.save(function(err) {
			if (err) return handleError(err);
		});
		question.choices.push(choice);
		question.save(function(err) {
			if (err) return handleError(err);
		});
	}
});

module.exports = router;

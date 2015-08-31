var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var choiceSchema = new Schema({
	text: String,
	votes: Number
});

module.exports = mongoose.model('choice', choiceSchema);
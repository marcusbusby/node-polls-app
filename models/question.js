var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
	text: String,
	choices: {
		type: Schema.ObjectId,
		ref: 'choices'
	}
});

module.exports = mongoose.model('question', questionSchema);

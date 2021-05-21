var mongoose = require('../configs/init.config');
var Schema = mongoose.Schema;

var appsSchema = new Schema({
    name: {
        type: String
    },
    weekday_limit: {
        type: String,
    },
    weekend_limit: {
        type: String 
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        default: Date.now,
    }
});

var Apps= mongoose.model('app',appsSchema);

module.exports = Apps;
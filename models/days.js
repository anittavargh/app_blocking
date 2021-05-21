var mongoose = require('../configs/init.config');
var Schema = mongoose.Schema;

var daysSchema = new Schema({
    day: {
        type: String
    },
    work_start_timings: {
        type: Array,
    },
    work_end_timings: {
        type: Array,
    },
    work_time_apps:{
        type: Array,
    },
    non_work_time_apps:{
        type: Array,
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

var Days= mongoose.model('day', daysSchema);

module.exports = Days;
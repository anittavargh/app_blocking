const Day = require("../models/days");

/**LOGIC BREAKDOWN
 * Add work timings for the week days
 */

module.exports.addWorkHours = async (req, res, next) => {
  try {
    const { day, work_start_timings, work_end_timings } = req.body;

    if(day=="Saturday"||day=="Sunday"){
        res.send({
            Status:400,
            Message: "Work hours cannot be added to weekends."
        })
    }

    if(work_start_timings.length!= work_end_timings.length){
        res.send({
            Status:400,
            Message: "Work start timings and work end timings array length do not match."
        })
    }
    
    await Day.updateOne(
        { day: day },
        {
          $push: {
            work_start_timings: work_start_timings,
            work_end_timings: work_end_timings,
          },
        }
      );

    res.send({
        Status: 200,
        Message: "Successfully updated"
    })


  } catch (err) {
    console.log(err);
    res.end({
      Status: 400,
      Message: "Error",
    });
  }
};

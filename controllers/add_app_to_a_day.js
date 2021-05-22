const Day = require("../models/days");

/**LOGIC BREAKDOWN
 * Add work-time-apps to a day
 * Add non-work-time-apps to a day 
 */

module.exports.addAppToDay = async (req, res, next) => {
  try {
    const { day, work_time_apps, non_work_time_apps } = req.body;

    if (work_time_apps != null && non_work_time_apps != null) {
      await Day.updateOne(
        { day: day },
        {
          $push: {
            work_time_apps: work_time_apps,
            non_work_time_apps: non_work_time_apps,
          },
        }
      );
    }
    if (work_time_apps == null && non_work_time_apps != null) {
      await Day.updateOne(
        { day: day },
        { $push: { non_work_time_apps: non_work_time_apps } }
      );
    }
    if (work_time_apps != null && non_work_time_apps == null) {
      await Day.updateOne(
        { day: day },
        { $push: { work_time_apps: work_time_apps } }
      );
    }

    res.send({
      Status: 200,
      Message: "updated successfully",
    });
  } catch (err) {
    console.log(err);
    res.end({
      Status: 400,
      Message: "Error",
    });
  }
};

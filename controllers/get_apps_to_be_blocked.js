const Day = require("../models/days");
const App = require("../models/app");
const { Time } = require("../helpers/time");

/**LOGIC BREAKDOWN
 * Get the list of apps to be blocked and the limit for a given time
 */

module.exports.info = async (req, res, next) => {
  try {
    //Get day and time from req.body
    const day = req.body.day;
    const time = req.body.time;

    //Find day info
    const dayInfo = await Day.findOne({ day: day });

    //Check for week days
    if (day != "Saturday" && day != "Sunday") {
      const length = dayInfo.work_start_timings.length;

      //Check if the time recieved from req.body is between the worktimings
      for (i = 0; i < length; i++) {
        var openTime = new Time(dayInfo.work_start_timings[i]);
        var closeTime = new Time(dayInfo.work_end_timings[i]);
        var checkTime = new Time(time);
        var timeIsBetween = function (start, end, check) {
          return start.hour <= end.hour
            ? check.isBiggerThan(start) && !check.isBiggerThan(end)
            : (check.isBiggerThan(start) && check.isBiggerThan(end)) ||
                (!check.isBiggerThan(start) && !check.isBiggerThan(end));
        };
        var isBetween = timeIsBetween(openTime, closeTime, checkTime);

        //If between work timings, return the appnames to be blocked
        if (isBetween) {
          res.send({
            Status: 200,
            Message: "Apps to be blocked during work time.",
            Data: dayInfo.work_time_apps,
          });
          break;
        }
      }
      //Else, find the apps that can be used during non-working hoours
      const appnames = dayInfo.non_work_time_apps.map(async (app) => {
        //check the time that the app can be used from apps table
        const appinfo = await App.findOne({ name: app });
        return {
          appname: appinfo.name,
          weekday_limit: appinfo.weekday_limit,
        };
      });
      const unpackPromise = await Promise.all(appnames);
      if (unpackPromise != null) {
        res.send({
          Status: 200,
          Message: "Apps to be blocked during non work time and the duration to be blocked.",
          Data: unpackPromise,
        });
      }
    }

    //Check for weekends
    else {
      const _appnames = dayInfo.non_work_time_apps.map(async (app) => {
        const _appinfo = await App.findOne({ name: app });
        return {
          appname: _appinfo.name,
          weekend_limit: _appinfo.weekend_limit,
        };
      });
      const _unpackPromise = await Promise.all(_appnames);
      res.send({
        Status: 200,
        Message: "Apps to be blocked during weekend and duration to be blocked.",
        Data: _unpackPromise,
      });
    }
  } catch (err) {
    console.log(err);
    res.end({
      Status: 400,
      Message: "Error",
    });
  }
};

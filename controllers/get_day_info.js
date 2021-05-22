const Day = require("../models/days");

/**LOGIC BREAKDOWN
 * Get details of all the days in a week
 */

module.exports.getDayInfo = async (req, res, next) => {
  try {
    const dayInfo = await Day.find({});
    res.send({
      Status: 200,
      Data: dayInfo,
    });
  } catch (err) {
    console.log(err);
    res.end({
      Status: 400,
      Message: "Error",
    });
  }
};
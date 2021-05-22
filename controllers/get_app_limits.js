const App = require("../models/app");

/**LOGIC BREAKDOWN
 * Get the names of all apps and theor non working time app limits
 */

module.exports.appLimit = async (req, res, next) => {
  try {
    const appLimit = await App.find({});
    res.send({
      Status: 200,
      Data: appLimit,
    });
  } catch (err) {
    console.log(err);
    res.end({
      Status: 400,
      Message: "Error",
    });
  }
};

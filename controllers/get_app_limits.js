const App = require("../models/app");

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

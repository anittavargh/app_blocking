const App = require("../models/app");

module.exports.setAppLimit = async (req, res, next) => {
  try {
    const { name, weekday_limit, weekend_limit } = req.body;

    const newapp = {
      name: name,
      weekday_limit: weekday_limit,
      weekend_limit: weekend_limit,
    };

    await new App(newapp).save();

    res.send({
      Status: 200,
      Message: "New app added.",
    });


  } catch (err) {
    console.log(err);
    res.end({
      Status: 400,
      Message: "Error",
    });
  }
};

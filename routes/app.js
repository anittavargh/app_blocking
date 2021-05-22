var express = require("express");
var router = express.Router();

/** imports */

const appController = require("../controllers/get_apps_to_be_blocked");
const getAppLimitsController = require("../controllers/get_app_limits");
const setAppLimitsController = require("../controllers/add_new_app");
const addAppToDayController = require("../controllers/add_app_to_a_day");
const getDayInfoController = require("../controllers/get_day_info");
const addWorkHoursToADay = require("../controllers/add_work_hours_to_a_day");


router.post("/info", appController.info);
router.get("/limits",getAppLimitsController.appLimit );
router.post("/limits", setAppLimitsController.setAppLimit);
router.put("/add", addAppToDayController.addAppToDay);
router.get("/day/info",getDayInfoController.getDayInfo );
router.put("/work/hours", addWorkHoursToADay.addWorkHours)


module.exports = router;
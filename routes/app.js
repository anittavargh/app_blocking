var express = require("express");
var router = express.Router();

/** imports */

const appController = require("../controllers/app");


router.post("/info", appController.add);


module.exports = router;
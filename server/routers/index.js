var express = require("express");
var router = express.Router();

router.use("/comment", require("./comments"));
router.use("/user", require("./users"));
router.use("/auth", require("./auth"));

module.exports = router;
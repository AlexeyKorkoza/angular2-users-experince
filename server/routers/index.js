var express = require("express");
var router = express.Router();

router.use("", require("./comment"));
router.use("/users", require("./user"));

module.exports = router;
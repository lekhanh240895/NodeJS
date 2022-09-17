var express = require("express");
var router = express.Router();

const SiteController = require("../app/controllers/SiteController");

router.use("/:slug", SiteController.search);
router.use("/", SiteController.index);

module.exports = router;

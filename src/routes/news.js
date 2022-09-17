var express = require("express");
var router = express.Router();

const NewsController = require("../app/controllers/NewsController");

router.use("/:slug", NewsController.show);
router.use("/", NewsController.index);

module.exports = router;

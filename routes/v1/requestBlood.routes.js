const express = require('express');
const router = express.Router();
const requestBloodController = require("../../controller/requestBlood.controller")

router.route("/").post(requestBloodController.createRequestBlood)

module.exports = router;
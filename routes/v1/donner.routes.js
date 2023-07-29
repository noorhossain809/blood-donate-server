const express = require("express")
const router = express.Router()
const donnerController = require("../../controller/donner.controller")


router.route("/").post(donnerController.createDonner)

module.exports = router;
const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  bloodGroupDetailsController,
} = require("../controllers/analyticController");

const router = express.Router();

//routes

//get Blood data
router.get("/bloodGroups-data", authMiddleware, bloodGroupDetailsController);

module.exports = router;

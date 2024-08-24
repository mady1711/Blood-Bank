const express = require("express");
const {
  getDonorList,
  getHospitalList,
  getOrgList,
  deleteDonorController,
} = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//routes

//get donor list
router.get("/donor-list", authMiddleware, adminMiddleware, getDonorList);

//get Hospital list
router.get("/hospital-list", authMiddleware, adminMiddleware, getHospitalList);

//get org list
router.get("/org-list", authMiddleware, adminMiddleware, getOrgList);

//delete donor
router.delete(
  "/delete-donor/:id",
  authMiddleware,
  adminMiddleware,
  deleteDonorController
);

module.exports = router;

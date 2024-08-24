const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonorsController,
  getHospitalController,
  getOrganisationController,
  getOrganisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} = require("../controllers/inventoryController");

const router = express.Router();

//routes
//add to inventory
router.post("/create-inventory", authMiddleware, createInventoryController);

//get all blood records
router.get("/get-inventory", authMiddleware, getInventoryController);

//get recent inventories
router.get(
  "/get-recent-inventory",
  authMiddleware,
  getRecentInventoryController
);

//get consumer blood records
router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalController
);

//get donor record
router.get("/get-donors", authMiddleware, getDonorsController);

//get hospital records
router.get("/get-hospitals", authMiddleware, getHospitalController);

//get Organisation records
router.get("/get-organisations", authMiddleware, getOrganisationController);

//get Organisation records
router.get(
  "/get-organisations-for-hospital",
  authMiddleware,
  getOrganisationForHospitalController
);

module.exports = router;

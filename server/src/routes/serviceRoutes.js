console.log("Service Routes Loaded");
const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const {
  createService,
  getAllServices,
  getServiceById,
  deleteService,
  updateService,
} = require("../controllers/serviceController");

router.post("/", createService);
router.get("/", getAllServices);
router.get("/:id", getServiceById);
router.put("/:id", updateService);
router.delete("/:id", deleteService);
module.exports = router;
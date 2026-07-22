const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createStaff,
  getAllStaff,
  getStaffById,
  updateStaff,
  deleteStaff,
} = require("../controllers/staffController");

router.post("/", protect, createStaff);

router.get("/", getAllStaff);
router.get("/:id", getStaffById);

router.put("/:id", protect, updateStaff);
router.delete("/:id", protect, deleteStaff);

module.exports = router;
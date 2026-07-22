const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createBooking,
  getAllBookings,
    updateBookingStatus,
    deleteBooking,
} = require("../controllers/bookingController");

// Public
router.post("/", createBooking);

// Admin
router.get("/", protect, getAllBookings);
// Admin
router.put("/:id/status", protect, updateBookingStatus);
router.delete("/:id", protect, deleteBooking);
module.exports = router;
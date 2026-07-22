const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createContact,
  getAllContacts,
  deleteContact,
} = require("../controllers/contactController");

// Public
router.post("/", createContact);

// Admin
router.get("/", protect, getAllContacts);
router.delete("/:id", protect, deleteContact);

module.exports = router;
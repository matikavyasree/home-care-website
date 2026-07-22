const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const {
  createGallery,
  getAllGallery,
  deleteGallery,
} = require("../controllers/galleryController");

router.post("/", protect, upload.single("image"), createGallery);
router.get("/", getAllGallery);
router.delete("/:id", protect, deleteGallery);

module.exports = router;
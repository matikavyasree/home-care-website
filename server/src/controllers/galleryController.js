const asyncHandler = require("../utils/asyncHandler");
const galleryModel = require("../models/galleryModel");

const createGallery = asyncHandler(async (req, res) => {
  const { title } = req.body;

  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "Please upload an image",
    });
  }

  const image = req.file.filename;

  const gallery = await galleryModel.createGallery(title, image);

  res.status(201).json({
    success: true,
    message: "Gallery image uploaded successfully",
    data: gallery,
  });
});

const getAllGallery = asyncHandler(async (req, res) => {
  const gallery = await galleryModel.getAllGallery();

  res.status(200).json({
    success: true,
    count: gallery.length,
    data: gallery,
  });
});

const deleteGallery = asyncHandler(async (req, res) => {
  const gallery = await galleryModel.deleteGallery(req.params.id);

  if (!gallery) {
    return res.status(404).json({
      success: false,
      message: "Gallery image not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Gallery image deleted successfully",
  });
});

module.exports = {
  createGallery,
  getAllGallery,
  deleteGallery,
};
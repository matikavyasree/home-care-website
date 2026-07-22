const asyncHandler = require("../utils/asyncHandler");
const staffModel = require("../models/staffModel");

const createStaff = asyncHandler(async (req, res) => {
  const newStaff = await staffModel.createStaff(req.body);

  res.status(201).json({
    success: true,
    message: "Staff added successfully",
    data: newStaff,
  });
});
const getAllStaff = asyncHandler(async (req, res) => {
  const staff = await staffModel.getAllStaff();

  res.status(200).json({
    success: true,
    count: staff.length,
    data: staff,
  });
});

const getStaffById = asyncHandler(async (req, res) => {
  const staff = await staffModel.getStaffById(req.params.id);

  if (!staff) {
    return res.status(404).json({
      success: false,
      message: "Staff not found",
    });
  }

  res.status(200).json({
    success: true,
    data: staff,
  });
});

const updateStaff = asyncHandler(async (req, res) => {
  const staff = await staffModel.updateStaff(req.params.id, req.body);

  if (!staff) {
    return res.status(404).json({
      success: false,
      message: "Staff not found",
    });
  }

  res.status(200).json({
    success: true,
    data: staff,
  });
});

const deleteStaff = asyncHandler(async (req, res) => {
  const staff = await staffModel.deleteStaff(req.params.id);

  if (!staff) {
    return res.status(404).json({
      success: false,
      message: "Staff not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Staff deleted successfully",
  });
});
module.exports = {
  createStaff,
  getAllStaff,
  getStaffById,
  updateStaff,
  deleteStaff,
};
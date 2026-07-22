const bookingModel = require("../models/bookingModel");
const asyncHandler = require("../utils/asyncHandler");

const createBooking = asyncHandler(async (req, res) => {
  const booking = await bookingModel.createBooking(req.body);

  res.status(201).json({
    success: true,
    message: "Booking created successfully",
    data: booking,
  });
});

const getAllBookings = asyncHandler(async (req, res) => {
  const bookings = await bookingModel.getAllBookings();

  res.status(200).json({
    success: true,
    count: bookings.length,
    data: bookings,
  });
});
const updateBookingStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const booking = await bookingModel.updateBookingStatus(id, status);

  if (!booking) {
    return res.status(404).json({
      success: false,
      message: "Booking not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Booking status updated successfully",
    data: booking,
  });
});

const deleteBooking = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const booking = await bookingModel.deleteBooking(id);

  if (!booking) {
    return res.status(404).json({
      success: false,
      message: "Booking not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Booking deleted successfully",
  });
});
module.exports = {
  createBooking,
  getAllBookings,
  updateBookingStatus,
  deleteBooking,
};
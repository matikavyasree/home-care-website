const contactModel = require("../models/contactModel");
const asyncHandler = require("../utils/asyncHandler");

const createContact = asyncHandler(async (req, res) => {
  const contact = await contactModel.createContact(req.body);

  res.status(201).json({
    success: true,
    message: "Message sent successfully",
    data: contact,
  });
});

const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await contactModel.getAllContacts();

  res.status(200).json({
    success: true,
    count: contacts.length,
    data: contacts,
  });
});

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await contactModel.deleteContact(req.params.id);

  if (!contact) {
    return res.status(404).json({
      success: false,
      message: "Message not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Message deleted successfully",
  });
});

module.exports = {
  createContact,
  getAllContacts,
  deleteContact,
};
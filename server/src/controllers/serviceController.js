const serviceModel = require("../models/serviceModel");
const asyncHandler = require("../utils/asyncHandler");
console.log(serviceModel);
const createService = async (req, res) => {
  try {
    const {
      title,
      slug,
      short_description,
      description,
      image,
      price,
    } = req.body;

    // Basic validation
    if (
      !title ||
      !slug ||
      !short_description ||
      !description ||
      !price
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields.",
      });
    }

    const newService = await serviceModel.createService(req.body);

    return res.status(201).json({
      success: true,
      message: "Service created successfully.",
      data: newService,
    });

  } catch (error) {
    console.error("Create Service Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
const getAllServices = async (req, res) => {
  try {
    const services = await serviceModel.getAllServices();

    return res.status(200).json({
      success: true,
      count: services.length,
      data: services,
    });
  } catch (error) {
    console.error("Get Services Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
const getServiceById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const service = await serviceModel.getServiceById(id);

  if (!service) {
    return res.status(404).json({
      success: false,
      message: "Service not found",
    });
  }

  res.status(200).json({
    success: true,
    data: service,
  });
});
const updateService = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const serviceData = req.body;

  const updatedService = await serviceModel.updateService(id, serviceData);

  if (!updatedService) {
    return res.status(404).json({
      success: false,
      message: "Service not found",
    });
  }

  res.status(200).json({
    success: true,
    data: updatedService,
  });
});
const deleteService = asyncHandler(async (req, res) => {
  const { id } = req.params;

  console.log("Deleting service with ID:", id);

  const deletedService = await serviceModel.deleteService(id);

  console.log("Deleted Service:", deletedService);

  if (!deletedService) {
    return res.status(404).json({
      success: false,
      message: "Service not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Service deleted successfully",
  });
});
module.exports = {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
};
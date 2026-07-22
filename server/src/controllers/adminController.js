const bcrypt = require("bcrypt");
const asyncHandler = require("../utils/asyncHandler");
const adminModel = require("../models/adminModel");
const generateToken = require("../utils/generateToken");

const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  // Find admin
  const admin = await adminModel.getAdminByEmail(email);

  if (!admin) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }

  // Compare password
  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }

  // Generate JWT
  const token = generateToken(admin.id);

  res.status(200).json({
    success: true,
    message: "Login successful",
    token,
    admin: {
      id: admin.id,
      name: admin.name,
      email: admin.email,
    },
  });
});

module.exports = {
  loginAdmin,
};
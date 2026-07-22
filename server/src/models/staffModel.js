const pool = require("../config/db");

const createStaff = async (staffData) => {
  const {
    name,
    designation,
    qualification,
    experience,
    specialization,
    image,
    phone,
    email,
  } = staffData;

  const query = `
    INSERT INTO staff
    (name, designation, qualification, experience, specialization, image, phone, email)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
    RETURNING *;
  `;

  const values = [
    name,
    designation,
    qualification,
    experience,
    specialization,
    image,
    phone,
    email,
  ];

  const result = await pool.query(query, values);

  return result.rows[0];
};
const getAllStaff = async () => {
  const query = `
    SELECT *
    FROM staff
    ORDER BY created_at DESC;
  `;

  const result = await pool.query(query);
  return result.rows;
};

const getStaffById = async (id) => {
  const query = `
    SELECT *
    FROM staff
    WHERE id = $1;
  `;

  const result = await pool.query(query, [id]);
  return result.rows[0];
};

const updateStaff = async (id, staffData) => {
  const {
    name,
    designation,
    qualification,
    experience,
    specialization,
    image,
    phone,
    email,
  } = staffData;

  const query = `
    UPDATE staff
    SET
      name = $1,
      designation = $2,
      qualification = $3,
      experience = $4,
      specialization = $5,
      image = $6,
      phone = $7,
      email = $8
    WHERE id = $9
    RETURNING *;
  `;

  const values = [
    name,
    designation,
    qualification,
    experience,
    specialization,
    image,
    phone,
    email,
    id,
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
};

const deleteStaff = async (id) => {
  const query = `
    DELETE FROM staff
    WHERE id = $1
    RETURNING *;
  `;

  const result = await pool.query(query, [id]);
  return result.rows[0];
};
module.exports = {
  createStaff,
  getAllStaff,
  getStaffById,
  updateStaff,
  deleteStaff,
};
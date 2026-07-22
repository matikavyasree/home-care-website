const pool = require("../config/db");

const createService = async (serviceData) => {
  const {
    title,
    slug,
    short_description,
    description,
    image,
    price,
  } = serviceData;

  const query = `
    INSERT INTO services
    (title, slug, short_description, description, image, price)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;

  const values = [
    title,
    slug,
    short_description,
    description,
    image,
    price,
  ];

  const result = await pool.query(query, values);

  return result.rows[0];
};
const getAllServices = async () => {
  const query = `
    SELECT *
    FROM services
    ORDER BY created_at DESC;
  `;

  const result = await pool.query(query);

  return result.rows;
};
const getServiceById = async (id) => {
  const query = `
    SELECT *
    FROM services
    WHERE id = $1;
  `;

  const result = await pool.query(query, [id]);

  return result.rows[0];
};
const updateService = async (id, serviceData) => {
  const {
    title,
    slug,
    short_description,
    description,
    image,
    price,
  } = serviceData;

  const query = `
    UPDATE services
    SET
      title = $1,
      slug = $2,
      short_description = $3,
      description = $4,
      image = $5,
      price = $6
    WHERE id = $7
    RETURNING *;
  `;

  const values = [
    title,
    slug,
    short_description,
    description,
    image,
    price,
    id,
  ];

  const result = await pool.query(query, values);

  return result.rows[0];
};
 const deleteService = async (id) => {
  const query = `
    DELETE FROM services
    WHERE id = $1
    RETURNING *;
  `;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

module.exports = {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
};
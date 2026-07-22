const pool = require("../config/db");

const createGallery = async (title, image) => {
  const query = `
    INSERT INTO gallery(title, image)
    VALUES($1, $2)
    RETURNING *;
  `;

  const result = await pool.query(query, [title, image]);

  return result.rows[0];
};

const getAllGallery = async () => {
  const result = await pool.query(
    "SELECT * FROM gallery ORDER BY created_at DESC"
  );

  return result.rows;
};

const deleteGallery = async (id) => {
  const result = await pool.query(
    "DELETE FROM gallery WHERE id=$1 RETURNING *",
    [id]
  );

  return result.rows[0];
};

module.exports = {
  createGallery,
  getAllGallery,
  deleteGallery,
};
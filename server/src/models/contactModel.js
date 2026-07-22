const pool = require("../config/db");

const createContact = async (contactData) => {
  const { name, phone, email, subject, message } = contactData;

  const query = `
    INSERT INTO contact
    (name, phone, email, subject, message)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;

  const values = [name, phone, email, subject, message];

  const result = await pool.query(query, values);

  return result.rows[0];
};

const getAllContacts = async () => {
  const query = `
    SELECT *
    FROM contact
    ORDER BY created_at DESC;
  `;

  const result = await pool.query(query);

  return result.rows;
};

const deleteContact = async (id) => {
  const query = `
    DELETE FROM contact
    WHERE id = $1
    RETURNING *;
  `;

  const result = await pool.query(query, [id]);

  return result.rows[0];
};

module.exports = {
  createContact,
  getAllContacts,
  deleteContact,
};
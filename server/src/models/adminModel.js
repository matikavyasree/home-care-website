const pool = require("../config/db");

const getAdminByEmail = async (email) => {
  const query = `
    SELECT *
    FROM admins
    WHERE email = $1;
  `;

  const result = await pool.query(query, [email]);

  return result.rows[0];
};

module.exports = {
  getAdminByEmail,
};
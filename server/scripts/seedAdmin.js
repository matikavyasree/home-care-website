const bcrypt = require("bcrypt");
const pool = require("../src/config/db");

const seedAdmin = async () => {
  try {
    const hashedPassword = await bcrypt.hash("Admin@123", 10);

    const query = `
      INSERT INTO admins (name, email, password)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;

    const values = [
      "Admin",
      "admin@gmail.com",
      hashedPassword,
    ];

    const result = await pool.query(query, values);

    console.log("✅ Admin created successfully");
    console.log(result.rows[0]);

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedAdmin();
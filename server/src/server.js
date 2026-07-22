const app = require("./app");
const pool = require("./config/db");

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await pool.query("SELECT NOW()");
    console.log("✅ Database connected successfully");

   app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
  }
}

startServer();
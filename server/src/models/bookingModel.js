const pool = require("../config/db");

const createBooking = async (bookingData) => {
  const {
    patient_name,
    phone,
    email,
    service_id,
    address,
    booking_date,
  } = bookingData;

  const query = `
    INSERT INTO bookings
    (patient_name, phone, email, service_id, address, booking_date)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;

  const values = [
    patient_name,
    phone,
    email,
    service_id,
    address,
    booking_date,
  ];

  const result = await pool.query(query, values);

  return result.rows[0];
};

const getAllBookings = async () => {
  const query = `
    SELECT *
    FROM bookings
    ORDER BY created_at DESC;
  `;

  const result = await pool.query(query);

  return result.rows;
};
const updateBookingStatus = async (id, status) => {
  const query = `
    UPDATE bookings
    SET status = $1
    WHERE id = $2
    RETURNING *;
  `;

  const result = await pool.query(query, [status, id]);

  return result.rows[0];
};

const deleteBooking = async (id) => {
  const query = `
    DELETE FROM bookings
    WHERE id = $1
    RETURNING *;
  `;

  const result = await pool.query(query, [id]);

  return result.rows[0];
};

module.exports = {
  createBooking,
  getAllBookings,
  updateBookingStatus,
  deleteBooking,
};
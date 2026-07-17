import { useState } from "react";
import Button from "../components/common/Button";
import { toast } from "react-toastify";

export default function Booking() {
  const [formData, setFormData] = useState({
    patientName: "",
    relationship: "",
    phone: "",
    email: "",
    age: "",
    gender: "",
    service: "",
    date: "",
    time: "",
    address: "",
    doctorName: "",
    hospitalDischarge: "",
    condition: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

   toast.success("Booking submitted successfully!");
  };

  return (
    <>
      {/* Banner */}
      <section className="bg-[#1E3A8A] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">Book a Nurse</h1>

          <p className="mt-4 text-red-200">
            Home / Booking
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-white rounded-2xl shadow-lg p-10">

            <h2 className="text-3xl font-bold text-[#1E3A8A] text-center mb-8">
              Home Care Booking Form
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 gap-6"
            >

              <input
                type="text"
                name="patientName"
                placeholder="Patient / Attender Name *"
                value={formData.patientName}
                onChange={handleChange}
                className="border rounded-lg p-3"
                required
              />

              <select
                name="relationship"
                value={formData.relationship}
                onChange={handleChange}
                className="border rounded-lg p-3"
              >
                <option value="">Relationship with Patient (Optional)</option>
                <option>Self</option>
                <option>Son</option>
                <option>Daughter</option>
                <option>Husband</option>
                <option>Wife</option>
                <option>Parent</option>
                <option>Relative</option>
                <option>Other</option>
              </select>

              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number *"
                value={formData.phone}
                onChange={handleChange}
                className="border rounded-lg p-3"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address (Optional)"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-lg p-3"
              />

              <input
                type="number"
                name="age"
                placeholder="Patient Age *"
                value={formData.age}
                onChange={handleChange}
                className="border rounded-lg p-3"
                required
              />

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="border rounded-lg p-3"
                required
              >
                <option value="">Select Gender *</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="border rounded-lg p-3"
                required
              >
                <option value="">Select Service *</option>
                <option>Home Nursing</option>
                <option>Elder Care</option>
                <option>Patient Care</option>
                <option>ICU Care</option>
                <option>Post Surgery Care</option>
                <option>Mother & Baby Care</option>
              </select>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="border rounded-lg p-3"
                required
              />

             

              <textarea
                name="address"
                placeholder="Patient Address *"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                className="border rounded-lg p-3 md:col-span-2"
                required
              />

              <input
                type="text"
                name="doctorName"
                placeholder="Doctor's Name (Optional)"
                value={formData.doctorName}
                onChange={handleChange}
                className="border rounded-lg p-3"
              />

              
              <textarea
                name="condition"
                placeholder="Medical Condition (Optional)"
                value={formData.condition}
                onChange={handleChange}
                rows="3"
                className="border rounded-lg p-3 md:col-span-2"
              />

              <textarea
                name="notes"
                placeholder="Additional Notes (Optional)"
                value={formData.notes}
                onChange={handleChange}
                rows="3"
                className="border rounded-lg p-3 md:col-span-2"
              />

              <Button
  type="submit"
  className="md:col-span-2 w-full"
>
  Book Appointment
</Button>

            </form>

          </div>

        </div>
      </section>
    </>
  );
}
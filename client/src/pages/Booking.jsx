import { useState } from "react";
import Button from "../components/common/Button";
import { toast } from "react-toastify";

export default function Booking() {
  const [formData, setFormData] = useState({
    patientName: "",
    phone: "",
    age: "",
    gender: "",
    service: "",
    date: "",
    address: "",
    condition: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);

  const inputStyle =
    "w-full border border-gray-300 rounded-xl p-3 outline-none transition-all duration-300 focus:border-[#1E3A8A] focus:ring-4 focus:ring-blue-100";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      console.log(formData);

      toast.success("Appointment booked successfully!");

      setFormData({
        patientName: "",
        phone: "",
        age: "",
        gender: "",
        service: "",
        date: "",
        address: "",
        condition: "",
        notes: "",
      });

      setLoading(false);
    }, 1500);
  };

  return (
    <>
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#0F172A] py-20 text-white">
        <div
          className="max-w-7xl mx-auto px-6 text-center"
          data-aos="fade-down"
        >
          <h1 className="text-5xl font-bold">Book a Nurse</h1>

          <p className="mt-4 text-red-200 text-lg">
          
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-3 gap-10">

            {/* Left Info Card */}
            <div
              data-aos="fade-right"
              className="bg-gradient-to-br from-[#1E3A8A] to-[#0F172A] text-white rounded-3xl shadow-2xl p-8"
            >
              <h2 className="text-3xl font-bold mb-6">
                Need Home Care?
              </h2>

              <p className="text-blue-100 mb-8">
                Professional home nursing and patient care services at your doorstep.
              </p>

              <div className="space-y-4">

                <div className="flex items-center gap-3">
                  <span>✅</span>
                  <p>24×7 Home Care Service</p>
                </div>

                <div className="flex items-center gap-3">
                  <span>✅</span>
                  <p>Experienced Nurses</p>
                </div>

                <div className="flex items-center gap-3">
                  <span>✅</span>
                  <p>Emergency Support</p>
                </div>

                <div className="flex items-center gap-3">
                  <span>✅</span>
                  <p>Affordable Care</p>
                </div>

              </div>

              <div className="border-t border-blue-400 my-8"></div>

              <div className="space-y-4">
                <p>📞 +91 8074172247</p>
                <p>📍 Tirupati, Andhra Pradesh</p>
                <p>🕒 24 × 7 Available</p>
              </div>

            </div>

            {/* Booking Form */}
            <div
              data-aos="zoom-in"
              className="lg:col-span-2 bg-white rounded-3xl shadow-2xl p-10 md:p-12"
            >

              <h2 className="text-3xl font-bold text-center text-[#1E3A8A] mb-3">
                Home Care Booking Form
              </h2>

              <p className="text-center text-gray-600 mb-10">
                Fill in your details and our healthcare team will contact you shortly.
              </p>

              <form
                onSubmit={handleSubmit}
                className="grid md:grid-cols-2 gap-6"
              >

                <input
                  type="text"
                  name="patientName"
                  placeholder="Patient Name *"
                  value={formData.patientName}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                />

                <input
                  type="number"
                  name="age"
                  placeholder="Age *"
                  value={formData.age}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                />

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                >
                  <option value="">Select Service</option>
                  <option>Nursing Care</option>
                  <option>Travel Attenders</option>
                  <option>Elder Care</option>
                  <option>ICU Care</option>
                  <option>Care Takers</option>
                  <option>Doctor Consultation</option>
                  <option>First Aid & Treatments</option>
                  <option>Physiotherapy</option>
                  <option>Blood Test</option>
                </select>

                                <textarea
                  name="address"
                  placeholder="Patient Address *"
                  value={formData.address}
                  onChange={handleChange}
                  rows="3"
                  className={`${inputStyle} md:col-span-2`}
                  required
                />

                <textarea
                  name="condition"
                  placeholder="Medical Condition (Optional)"
                  value={formData.condition}
                  onChange={handleChange}
                  rows="3"
                  className={`${inputStyle} md:col-span-2`}
                />

                <textarea
                  name="notes"
                  placeholder="Additional Notes (Optional)"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="3"
                  className={`${inputStyle} md:col-span-2`}
                />

                <p className="text-sm text-gray-500 md:col-span-2">
                  Our team will contact you within <strong>10-15 minutes</strong> after receiving your request.
                </p>

                <div className="md:col-span-2">
                  <Button
                    type="submit"
                    className="w-full py-4 text-lg"
                    disabled={loading}
                  >
                    {loading ? "Booking..." : "Book Appointment"}
                  </Button>
                </div>

                <p className="text-xs text-center text-gray-400 md:col-span-2">
                  Your information is safe with us and will only be used for booking purposes.
                </p>

              </form>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}
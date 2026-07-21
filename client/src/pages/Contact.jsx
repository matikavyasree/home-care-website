import { useState } from "react";
import { toast } from "react-toastify";
import Button from "../components/common/Button";
import PageHeader from "../components/common/PageHeader";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
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

      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });

      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        breadcrumb="Home / Contact"
      />

      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-3 gap-10">

            {/* Left Contact Card */}
            <div
              data-aos="fade-right"
              className="bg-gradient-to-br from-[#1E3A8A] to-[#0F172A] text-white rounded-3xl shadow-2xl p-8"
            >

              <h2 className="text-3xl font-bold mb-6">
                Get In Touch
              </h2>

              <p className="text-blue-100 mb-8">
                Need help? Contact our healthcare team anytime. We're available 24×7 to assist you.
              </p>

              <div className="space-y-6">

                <div>
                  <h3 className="font-semibold text-xl mb-1">
                    📞 Call Us
                  </h3>

                  <p>+91 8074172247</p>
                </div>

                <div>
                  <h3 className="font-semibold text-xl mb-1">
                    📧 Email
                  </h3>

                  <p>mummathotyrajesh@gmail.com</p>
                </div>

                <div>
                  <h3 className="font-semibold text-xl mb-1">
                    📍 Address
                  </h3>

                  <p>Tirupati, Andhra Pradesh</p>
                </div>

                <div>
                  <h3 className="font-semibold text-xl mb-1">
                    🕒 Working Hours
                  </h3>

                  <p>24 × 7 Service Available</p>
                </div>

              </div>

            </div>

            {/* Contact Form */}
            <div
              data-aos="fade-left"
              className="lg:col-span-2 bg-white rounded-3xl shadow-2xl p-10 md:p-12"
            >

              <h2 className="text-3xl font-bold text-center text-[#1E3A8A] mb-3">
                Send Us a Message
              </h2>

              <p className="text-center text-gray-600 mb-10">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>

              <form
                onSubmit={handleSubmit}
                className="grid md:grid-cols-2 gap-6"
              >

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
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
                  type="email"
                  name="email"
                  placeholder="Email Address (Optional)"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputStyle}
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject *"
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                />
                                <textarea
                  name="message"
                  placeholder="Your Message *"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputStyle} md:col-span-2`}
                  required
                />

                <p className="text-sm text-gray-500 md:col-span-2">
                  Our team will respond to your enquiry as soon as possible.
                </p>

                <div className="md:col-span-2">
                  <Button
                    type="submit"
                    className="w-full py-4 text-lg"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </div>

                <p className="text-xs text-center text-gray-400 md:col-span-2">
                  Your personal information is safe with us and will only be
                  used to respond to your enquiry.
                </p>

              </form>

            </div>

          </div>

          {/* Google Map */}
          <div
            data-aos="fade-up"
            className="mt-16 rounded-3xl overflow-hidden shadow-2xl"
          >
            <iframe
  title="Home Care Nurse Services Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.263884229834!2d79.42117177485383!3d13.641705486738722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b804df0fab3%3A0x9e547a9a02dd58e5!2sHome%20Care%20Nurse%20services%20Mummathoty%20Rajesh!5e0!3m2!1sen!2sin!4v1784625088355!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  loading="lazy"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>
          </div>

        </div>
      </section>
    </>
  );
}
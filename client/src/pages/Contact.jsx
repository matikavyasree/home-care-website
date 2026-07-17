import { useState } from "react";
import { toast } from "react-toastify";
import PageHeader from "../components/common/PageHeader";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    toast.success("Message sent successfully!");

    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        breadcrumb="Home / Contact"
      />

      <section className="py-20 bg-[#F8FAFC]">

        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-white rounded-xl shadow-lg p-10">

            <h2 className="text-3xl font-bold text-center text-[#1E3A8A] mb-8">
              Send Us a Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 gap-6"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="border rounded-lg p-3"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="border rounded-lg p-3"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-lg p-3"
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="border rounded-lg p-3"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="border rounded-lg p-3 md:col-span-2"
                required
              />

              <button
                type="submit"
                className="bg-[#E11D2E] hover:bg-red-700 text-white py-4 rounded-lg md:col-span-2 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>
    </>
  );
}
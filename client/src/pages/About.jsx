import {
  FaBullseye,
  FaEye,
  FaCheckCircle,
  FaUsers,
  FaUserNurse,
  FaClock,
} from "react-icons/fa";

import PageHeader from "../components/common/PageHeader";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <PageHeader title="About Us" />

      {/* About Section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1E3A8A]">
              Welcome to Home Care Nurse Services
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Home Care Nurse Services is committed to providing compassionate,
              reliable, and professional healthcare services at your doorstep.
              Our experienced healthcare team ensures every patient receives
              personalized care in the comfort of their home.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-[#E11D2E] text-3xl mb-6">
                <FaBullseye />
              </div>

              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">
                Our Mission
              </h3>

              <p className="text-gray-600 leading-7">
                To provide high-quality, affordable, and compassionate
                healthcare services that improve the quality of life for
                patients and their families.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-[#1E3A8A] text-3xl mb-6">
                <FaEye />
              </div>

              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">
                Our Vision
              </h3>

              <p className="text-gray-600 leading-7">
                To become one of the most trusted home healthcare providers by
                delivering reliable, professional, and patient-centered care.
              </p>
            </div>

          </div>

          {/* Why Choose Us */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-center text-[#1E3A8A] mb-12">
              Why Choose Us?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              {[
                "Experienced Healthcare Professionals",
                "24/7 Patient Support",
                "Affordable Healthcare Services",
                "Personalized Patient Care",
                "Trusted by Families",
                "Quality Medical Assistance",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow p-5 flex items-center gap-4"
                >
                  <FaCheckCircle className="text-[#E11D2E] text-xl" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <FaUsers className="text-4xl text-[#E11D2E] mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-[#1E3A8A]">1000+</h3>
              <p className="text-gray-600 mt-2">Happy Patients</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <FaUserNurse className="text-4xl text-[#E11D2E] mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-[#1E3A8A]">50+</h3>
              <p className="text-gray-600 mt-2">Healthcare Professionals</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <FaClock className="text-4xl text-[#E11D2E] mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-[#1E3A8A]">24/7</h3>
              <p className="text-gray-600 mt-2">Support Available</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <FaCheckCircle className="text-4xl text-[#E11D2E] mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-[#1E3A8A]">10+</h3>
              <p className="text-gray-600 mt-2">Years of Experience</p>
            </div>

          </div>

          {/* CTA */}
          <div className="bg-[#1E3A8A] rounded-3xl mt-20 p-12 text-center text-white">
            <h2 className="text-4xl font-bold">
              Need Professional Home Healthcare?
            </h2>

            <p className="mt-4 text-lg text-gray-200">
              Our experienced healthcare team is ready to provide compassionate
              and reliable care at your home.
            </p>

            <Link to="/booking">
              <button className="mt-8 bg-[#E11D2E] hover:bg-red-700 px-8 py-4 rounded-xl font-semibold text-lg transition">
                Book Appointment
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
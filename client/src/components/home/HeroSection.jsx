import { Link } from "react-router-dom";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import Button from "../common/Button";
// import heroImage from "../../assets/images/hero-nurse.jpg";

export default function HeroSection() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left */}
            <div data-aos="fade-right">

              <span className="inline-block bg-red-100 text-[#E11D2E] px-4 py-2 rounded-full text-sm font-semibold">
                Trusted Home Healthcare Services
              </span>

              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-[#1E3A8A] mt-6">
                Compassionate Home Care
                <span className="block text-[#E11D2E]">
                  Professional Nursing
                </span>
                At Your Doorstep
              </h1>

              <p className="mt-6 text-lg text-gray-600 leading-8">
                Home Care Nurse Services provides qualified and experienced
                nurses for Elder Care, Patient Care, ICU Care, Post Surgery
                Care, and Mother & Baby Care in the comfort of your home.
              </p>

              {/* Buttons */}
              <div
                className="flex flex-wrap gap-4 mt-8"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <Link to="/booking">
                  <Button>Book Appointment</Button>
                </Link>

                <a href="tel:+919876543210">
                  <button className="flex items-center gap-2 border-2 border-[#1E3A8A] text-[#1E3A8A] px-6 py-3 rounded-lg hover:bg-[#1E3A8A] hover:text-white transition">
                    <FaPhoneAlt />
                    Call Now
                  </button>
                </a>
              </div>

              {/* Trust Badges */}
              <div
                className="grid grid-cols-2 gap-4 mt-10"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  <span>Certified Nurses</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  <span>24/7 Support</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  <span>Affordable Care</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  <span>Trusted by Families</span>
                </div>
              </div>

            </div>

            {/* Right */}
            <div className="relative" data-aos="fade-left">

              <div className="bg-white rounded-3xl shadow-2xl border p-8 flex flex-col items-center justify-center h-[500px]">

                {/* <img
                  src={heroImage}
                  alt="Home Care Nurse"
                  className="w-full h-full object-cover rounded-2xl"
                /> */}

                <div className="text-8xl">🏥</div>

                <h2 className="mt-6 text-3xl font-bold text-[#1E3A8A]">
                  MR Home Care
                </h2>

                <p className="text-[#E11D2E] mt-2">
                  Caring with Compassion
                </p>

              </div>

              {/* Floating Card */}
              <div
                className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-xl p-5 border"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <h3 className="text-3xl font-bold text-[#E11D2E]">
                  10+
                </h3>

                <p className="text-gray-600">
                  Years of Trusted Service
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

            <div
              className="bg-blue-50 rounded-xl p-6 shadow"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <h2 className="text-4xl font-bold text-[#1E3A8A]">
                1000+
              </h2>
              <p className="mt-2 text-gray-600">
                Happy Patients
              </p>
            </div>

            <div
              className="bg-red-50 rounded-xl p-6 shadow"
              data-aos="zoom-in"
              data-aos-delay="250"
            >
              <h2 className="text-4xl font-bold text-[#E11D2E]">
                50+
              </h2>
              <p className="mt-2 text-gray-600">
                Professional Caregivers
              </p>
            </div>

            <div
              className="bg-blue-50 rounded-xl p-6 shadow"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <h2 className="text-4xl font-bold text-[#1E3A8A]">
                24/7
              </h2>
              <p className="mt-2 text-gray-600">
                Support Available
              </p>
            </div>

            <div
              className="bg-red-50 rounded-xl p-6 shadow"
              data-aos="zoom-in"
              data-aos-delay="550"
            >
              <h2 className="text-4xl font-bold text-[#E11D2E]">
                100%
              </h2>
              <p className="mt-2 text-gray-600">
                Patient Satisfaction
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
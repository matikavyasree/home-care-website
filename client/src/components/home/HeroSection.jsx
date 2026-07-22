import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Button from "../common/Button";
import heroImage from "../../assets/images/hero-image.png";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/85 via-[#0F172A]/55 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        <div className="max-w-2xl text-white">

          {/* Badge */}
          <span className="inline-block bg-[#E11D2E] px-5 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg mb-6">
            Trusted Home Healthcare Services
          </span>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Professional Home
            <br />
            Nursing Care
            <span className="text-[#EF4444]"> At Your Doorstep</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-200 leading-8">
            We provide compassionate and reliable home healthcare services,
            including patient care, elderly care, ICU care, post-operative
            support, injections, physiotherapy, and qualified nursing
            assistance—all delivered in the comfort of your home.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-400 text-xl" />
              <span>24/7 Emergency Support</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-400 text-xl" />
              <span>Experienced Nurses</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-400 text-xl" />
              <span>Affordable Home Care</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-400 text-xl" />
              <span>Trusted Healthcare Service</span>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            <NavLink to="/booking">
              <Button>
                Book Now
              </Button>
            </NavLink>

            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 border border-white text-white px-7 py-3 rounded-xl hover:bg-white hover:text-[#1E3A8A] transition-all duration-300 font-semibold"
            >
              <FaPhoneAlt />
              Call Now
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}

          <div>
            <h2 className="text-2xl font-bold text-[#E11D2E]">
              MR Home Care
            </h2>

            <p className="mt-4 text-gray-300 leading-7">
              Professional home healthcare services with experienced
              nurses and compassionate caregivers.
            </p>

            <div className="flex gap-4 mt-6">

              <a href="#">
                <FaFacebookF className="text-xl hover:text-[#E11D2E]" />
              </a>

              <a href="#">
                <FaInstagram className="text-xl hover:text-[#E11D2E]" />
              </a>

              <a href="#">
                <FaWhatsapp className="text-xl hover:text-[#E11D2E]" />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li><Link to="/">Home</Link></li>

              <li><Link to="/about">About</Link></li>

              <li><Link to="/services">Services</Link></li>

              <li><Link to="/gallery">Gallery</Link></li>

              <li><Link to="/contact">Contact</Link></li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Our Services
            </h3>

            <ul className="space-y-3">

              <li>Home Nursing</li>

              <li>Elder Care</li>

              <li>ICU Care</li>

              <li>Patient Care</li>

              <li>Post Surgery Care</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact Us
            </h3>

            <div className="space-y-4">

              <p className="flex items-center gap-3">
                <FaPhoneAlt />
                +91 98765 43210
              </p>

              <p className="flex items-center gap-3">
                <FaEnvelope />
                info@mrhomecare.com
              </p>

              <p className="flex items-center gap-3">
                <FaMapMarkerAlt />
                Tirupati, Andhra Pradesh
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-700 py-6 text-center text-gray-400">

        © {new Date().getFullYear()} MR Home Care Nursing Services.
        All Rights Reserved.

      </div>

    </footer>
  );
}
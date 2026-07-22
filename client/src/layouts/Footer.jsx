import { Phone, Mail, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Home Care Nurse Services
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              We provide compassionate, reliable, and professional home
              healthcare services including nursing care, elder care,
              physiotherapy, ICU care, doctor consultations, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-xl mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-red-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-red-500 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-red-500 transition">
                  Services
                </Link>
              </li>
              
              <li>
                <Link to="/contact" className="hover:text-red-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-xl mb-5">
              Our Services
            </h3>

            <ul className="space-y-3">
              <li>Nursing Care</li>
              <li>Elder Care</li>
              <li>ICU Care</li>
              <li>Physiotherapy</li>
              <li>Doctor Consultation</li>
              <li>Blood Test</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-xl mb-5">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-3">
                <Phone className="text-red-500 mt-1" size={18} />
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p>+91 8074172247</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="text-red-500 mt-1" size={18} />
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p>mummathotyrajesh@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="text-red-500 mt-1" size={18} />
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p>
                    Tirupati & Ananthapur
                    <br />
                    Andhra Pradesh
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-sm text-center md:text-left">
            © {year} Home Care Nurse Services. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-sm mt-4 md:mt-0">
            Made with{" "}
            <Heart className="text-red-500 fill-red-500" size={16} />
            for Better Healthcare
          </p>

        </div>

      </div>
    </footer>
  );
}
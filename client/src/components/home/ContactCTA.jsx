import { Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactCTA() {
  return (
    <section className="bg-[#1E3A8A] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-xl p-10 lg:p-16">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left */}
            <div>
              <p className="text-[#E11D2E] uppercase font-semibold tracking-widest">
                Need Home Healthcare?
              </p>

              <h2 className="text-4xl font-bold text-[#1E3A8A] mt-3">
                Book Professional Nursing Care Today
              </h2>

              <p className="text-gray-600 mt-5 leading-8">
                Our experienced healthcare professionals are ready to
                provide compassionate and reliable care at your home.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-end">

              <Link to="/booking">
                <button className="bg-[#E11D2E] hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition w-full">
                  Book a Nurse
                </button>
              </Link>

              <a href="tel:+919999999999">
                <button className="border-2 border-[#1E3A8A] text-[#1E3A8A] px-8 py-4 rounded-lg font-semibold hover:bg-[#1E3A8A] hover:text-white transition w-full flex items-center justify-center gap-2">
                  <FaPhoneAlt />
                  Call Now
                </button>
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition w-full flex items-center justify-center gap-2">
                  <FaWhatsapp />
                  WhatsApp
                </button>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
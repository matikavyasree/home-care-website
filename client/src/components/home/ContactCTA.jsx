import { Phone, CalendarCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#1E3A8A] to-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6">

        <div
          className="bg-white rounded-3xl p-10 md:p-16 shadow-2xl"
          data-aos="zoom-in"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left Content */}
            <div data-aos="fade-right">
              <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
                GET STARTED TODAY
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mt-6 leading-tight">
                Quality Healthcare
                <br />
                At Your Doorstep
              </h2>

              <p className="text-gray-600 mt-6 leading-8">
                Whether you need nursing care, elder care, ICU support,
                physiotherapy, or home medical assistance, our experienced team
                is available 24/7 to provide compassionate healthcare in the
                comfort of your home.
              </p>

              <div
                className="flex flex-wrap gap-5 mt-10"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Link
                  to="/booking"
                  className="flex items-center gap-2 bg-[#E11D2E] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-red-700 hover:scale-105 transition-all duration-300"
                >
                  <CalendarCheck size={22} />
                  Book Appointment
                </Link>

                <a
                  href="tel:+919999999999"
                  className="flex items-center gap-2 border-2 border-[#1E3A8A] text-[#1E3A8A] px-8 py-4 rounded-xl font-semibold hover:bg-[#1E3A8A] hover:text-white hover:scale-105 transition-all duration-300"
                >
                  <Phone size={22} />
                  Call Now
                </a>
              </div>
            </div>

            {/* Right Side */}
            <div
              className="flex justify-center"
              data-aos="fade-left"
            >
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-red-100 to-blue-100 flex items-center justify-center animate-pulse">

                <div className="w-56 h-56 rounded-full bg-[#1E3A8A] flex items-center justify-center shadow-2xl">

                  <Phone className="w-20 h-20 text-white" />

                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
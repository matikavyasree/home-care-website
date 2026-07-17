import { Link } from "react-router-dom";
import Button from "../common/Button";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-red-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <p className="text-[#E11D2E] font-semibold uppercase tracking-widest">
              Trusted Home Healthcare Services
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#1E3A8A] mt-4">
              Professional Nursing Care
              <span className="block text-[#E11D2E]">
                At Your Home
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              We provide experienced nurses, patient attendants,
              elderly care, ICU care and post-operative care at your home.
            </p>

            <div className="flex gap-4 mt-8">
              <Link to="/booking">
                <Button>Book a Nurse</Button>
              </Link>

              <Link to="/services">
                <button className="border-2 border-[#1E3A8A] text-[#1E3A8A] px-6 py-3 rounded-lg hover:bg-[#1E3A8A] hover:text-white transition">
                  Explore Services
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-white shadow-xl rounded-3xl p-10 text-center border border-gray-200">
            <div className="text-7xl mb-4">🏥</div>

            <h2 className="text-2xl font-bold text-[#1E3A8A]">
              MR Home Care
            </h2>

            <p className="text-[#E11D2E] mt-3">
              Professional Home Healthcare Services
            </p>

            <p className="text-gray-500 mt-4">
              Hero image will be added later.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
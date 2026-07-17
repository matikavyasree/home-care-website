import { Link } from "react-router-dom";
import { FaUserNurse } from "react-icons/fa";

export default function Nurses() {
  return (
    <>
      {/* Banner */}
      <section className="bg-[#1E3A8A] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">Our Nurses</h1>
          <p className="mt-4 text-red-200">
            Home / Nurses
          </p>
        </div>
      </section>

      {/* Placeholder */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <div className="w-28 h-28 mx-auto rounded-full bg-red-100 flex items-center justify-center">
            <FaUserNurse className="text-5xl text-[#E11D2E]" />
          </div>

          <h2 className="text-4xl font-bold text-[#1E3A8A] mt-8">
            Nurse Profiles Coming Soon
          </h2>

          <p className="text-gray-600 mt-6 leading-8">
            Our experienced and certified nursing professionals will be
            displayed here once the information is available.
          </p>

          <Link to="/booking">
            <button className="mt-10 bg-[#E11D2E] hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition">
              Book a Nurse
            </button>
          </Link>

        </div>
      </section>
    </>
  );
}
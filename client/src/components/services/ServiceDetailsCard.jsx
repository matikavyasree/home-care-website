import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ServiceDetailsCard({ service }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">

      <h2 className="text-2xl font-bold text-[#1E3A8A]">
        {service.title}
      </h2>

      <p className="text-gray-600 mt-4 leading-7">
        {service.description}
      </p>

      <div className="mt-6 space-y-3">

        {service.benefits.map((item, index) => (
          <div key={index} className="flex items-center gap-3">

            <FaCheckCircle className="text-[#E11D2E]" />

            <span>{item}</span>

          </div>
        ))}

      </div>

      <Link to="/booking">

        <button className="mt-8 bg-[#E11D2E] hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition">
          Book Now
        </button>

      </Link>

    </div>
  );
}

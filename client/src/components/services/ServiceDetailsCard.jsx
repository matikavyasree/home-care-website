import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const colors = {
  red: {
    bg: "bg-red-50",
    border: "border-red-500",
    button: "bg-red-500 hover:bg-red-600",
  },
  orange: {
    bg: "bg-orange-50",
    border: "border-orange-500",
    button: "bg-orange-500 hover:bg-orange-600",
  },
  purple: {
    bg: "bg-purple-50",
    border: "border-purple-500",
    button: "bg-purple-500 hover:bg-purple-600",
  },
  rose: {
    bg: "bg-rose-50",
    border: "border-rose-500",
    button: "bg-rose-500 hover:bg-rose-600",
  },
  green: {
    bg: "bg-green-50",
    border: "border-green-500",
    button: "bg-green-500 hover:bg-green-600",
  },
  cyan: {
    bg: "bg-cyan-50",
    border: "border-cyan-500",
    button: "bg-cyan-500 hover:bg-cyan-600",
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-500",
    button: "bg-amber-500 hover:bg-amber-600",
  },
  indigo: {
    bg: "bg-indigo-50",
    border: "border-indigo-500",
    button: "bg-indigo-500 hover:bg-indigo-600",
  },
  pink: {
    bg: "bg-pink-50",
    border: "border-pink-500",
    button: "bg-pink-500 hover:bg-pink-600",
  },
};

export default function ServiceDetailsCard({ service }) {
  const color = colors[service.color];

  return (
    <div
      className={`group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 border-t-4 ${color.border} overflow-hidden hover:-translate-y-3`}
    >
      <div className="p-8">

        {/* PNG Icon */}
        <div className="flex justify-center">
          <div
            className={`${color.bg} w-24 h-24 rounded-full flex items-center justify-center shadow-lg `}
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-14 h-14 object-contain rounded-full"
            />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-[#1E3A8A] mt-8">
          {service.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-4 text-center leading-7">
          {service.description}
        </p>

        {/* Benefits */}
        <div className="mt-8 space-y-3">
          {service.benefits.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <Link to="/booking">
          <button
            className={`${color.button} mt-8 w-full text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105`}
          >
            Book Appointment
            <ArrowRight className="w-5 h-5" />
          </button>
        </Link>

      </div>
    </div>
  );
}
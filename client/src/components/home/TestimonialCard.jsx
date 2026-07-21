import { FaStar, FaQuoteLeft, FaUserCircle } from "react-icons/fa";

export default function TestimonialCard({ testimonial, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 120}
      className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-gray-100"
    >
      {/* Quote Icon */}
      <div className="flex justify-between items-center mb-5">

        <div className="flex gap-1 text-yellow-400">
          {[...Array(testimonial.rating)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        <FaQuoteLeft className="text-3xl text-red-200" />

      </div>

      {/* Review */}
      <p className="text-gray-600 italic leading-8 min-h-[130px]">
        "{testimonial.review}"
      </p>

      {/* Patient */}
      <div className="border-t mt-6 pt-5 flex items-center gap-4">

        <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
          <FaUserCircle className="text-4xl text-[#1E3A8A]" />
        </div>

        <div>
          <h3 className="font-bold text-lg text-[#1E3A8A]">
            {testimonial.name}
          </h3>

          <p className="text-sm text-gray-500">
            {testimonial.location}
          </p>
        </div>

      </div>
    </div>
  );
}
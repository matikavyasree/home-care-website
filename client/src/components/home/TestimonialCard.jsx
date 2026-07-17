import { FaStar } from "react-icons/fa";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300">

      <div className="flex text-yellow-400 mb-4">
        {[...Array(testimonial.rating)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>

      <p className="text-gray-600 italic leading-7">
        "{testimonial.review}"
      </p>

      <div className="mt-6 border-t pt-4">
        <h3 className="font-bold text-[#1E3A8A]">
          {testimonial.name}
        </h3>

        <p className="text-sm text-gray-500">
          {testimonial.location}
        </p>
      </div>

    </div>
  );
}

import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-6">
      <div
        className="text-center max-w-lg"
        data-aos="zoom-in"
      >
        <h1 className="text-8xl md:text-9xl font-extrabold text-[#E11D2E]">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mt-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-600 mt-5 leading-relaxed">
          The page you are looking for may have been moved, deleted, or the URL
          may be incorrect.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-8 bg-[#E11D2E] hover:bg-red-700 text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
        >
          <Home size={20} />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
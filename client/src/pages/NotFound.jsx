import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-[#E11D2E]">404</h1>

        <h2 className="text-4xl font-bold text-[#1E3A8A] mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-5">
          Sorry, the page you are looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 bg-[#E11D2E] hover:bg-red-700 text-white px-6 py-3 rounded-lg"
        >
          Go Back Home
        </Link>
      </div>
    </section>
  );
}
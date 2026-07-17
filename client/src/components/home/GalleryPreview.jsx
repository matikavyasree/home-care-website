import { Link } from "react-router-dom";
import gallery from "../../data/gallery";

export default function GalleryPreview() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-[#E11D2E] font-semibold uppercase tracking-widest">
            Gallery
          </p>

          <h2 className="text-4xl font-bold text-[#1E3A8A] mt-3">
            Our Care in Action
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            A glimpse of our professional home healthcare services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {gallery.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl shadow-lg bg-white group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold text-[#1E3A8A]">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}

        </div>

        <div className="text-center mt-12">
          <Link to="/gallery">
            <button className="bg-[#E11D2E] hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition">
              View Full Gallery
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
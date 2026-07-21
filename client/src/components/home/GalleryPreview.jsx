import { Link } from "react-router-dom";
import gallery from "../../data/gallery";

export default function GalleryPreview() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div
          className="text-center"
          data-aos="fade-down"
        >
          <p className="text-[#E11D2E] font-semibold uppercase tracking-widest">
            Gallery
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mt-3">
            Our Care in Action
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto leading-8">
            A glimpse of our compassionate healthcare services and dedicated
            professionals serving patients with care.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {gallery.map((item, index) => (
            <div
              key={item.id}
              data-aos="zoom-in"
              data-aos-delay={index * 120}
              className="relative overflow-hidden rounded-3xl shadow-lg bg-white group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[#1E3A8A]/0 group-hover:bg-[#1E3A8A]/70 transition-all duration-500 flex items-center justify-center">

                <h3 className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 text-center px-4">
                  {item.title}
                </h3>

              </div>

            </div>
          ))}

        </div>

        {/* Button */}
        <div
          className="text-center mt-14"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <Link to="/gallery">
            <button className="bg-[#E11D2E] hover:bg-red-700 hover:scale-105 transition-all duration-300 text-white px-8 py-3 rounded-xl font-semibold shadow-lg">
              View Full Gallery
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
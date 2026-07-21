import allServices from "../../data/allServices";
import ServiceCard from "../services/ServiceCard";
import { Link } from "react-router-dom";

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div
          className="text-center"
          data-aos="fade-down"
        >
          <p className="text-[#E11D2E] font-semibold uppercase tracking-widest">
            Our Services
          </p>

          <h2 className="text-4xl font-bold text-[#1E3A8A] mt-3">
            Quality Healthcare Services
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            We provide trusted home healthcare solutions with experienced
            nurses and compassionate caregivers for every stage of recovery.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {allServices.slice(0, 4).map((service, index) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        {/* Button */}
        <div
          className="text-center mt-14"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <Link to="/services">
            <button className="bg-[#1E3A8A] hover:bg-[#162d6b] text-white px-8 py-3 rounded-lg font-semibold transition hover:scale-105 duration-300">
              View All Services
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
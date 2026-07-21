import PageHeader from "../components/common/PageHeader";
import ServiceDetailsCard from "../components/services/ServiceDetailsCard";
import WhyChooseServices from "../components/services/WhyChooseServices";
import allServices from "../data/allServices";

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <PageHeader title="Our Services" />

      {/* Services Section */}
      <section className="bg-gradient-to-b from-white via-slate-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Healthcare Services
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A]">
              Professional Home Care Services
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-8">
              We provide trusted, compassionate, and affordable healthcare
              services at your doorstep with experienced nurses,
              caregivers, physiotherapists, and medical professionals.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {allServices.map((service) => (
              <ServiceDetailsCard
                key={service.id}
                service={service}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseServices />
    </>
  );
}
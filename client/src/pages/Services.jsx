import { useState } from "react";
import PageHeader from "../components/common/PageHeader";
import Loader from "../components/common/Loader";
import EmptyState from "../components/common/EmptyState";
import ServiceDetailsCard from "../components/services/ServiceDetailsCard";
import allServices from "../data/allServices";

export default function Services() {
  // For future backend integration
  const [loading] = useState(false);

  if (loading) {
    return <Loader />;
  }

  if (allServices.length === 0) {
    return (
      <>
        <PageHeader
          title="Our Services"
          breadcrumb="Home / Services"
        />

        <EmptyState message="No services available." />
      </>
    );
  }

  return (
    <>
      <PageHeader
        title="Our Services"
        breadcrumb="Home / Services"
      />

      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {allServices.map((service) => (
              <ServiceDetailsCard
                key={service.id}
                service={service}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

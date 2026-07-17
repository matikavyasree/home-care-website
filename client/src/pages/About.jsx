import PageHeader from "../components/common/PageHeader";

export default function About() {
  return (
    <>
      <PageHeader
        title="About Us"
        breadcrumb="Home / About"
      />

      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6">
            Welcome to MR Home Care Nurse Services
          </h2>

          <p className="text-gray-600 leading-8">
            We provide professional home nursing, patient care, elderly care,
            ICU care, post-surgery care, and mother & baby care services.
            Our mission is to deliver compassionate healthcare services at
            the comfort of your home with experienced and certified nurses.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-14">

            <div className="bg-white p-8 rounded-xl shadow">

              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">
                Our Mission
              </h3>

              <p className="text-gray-600">
                To provide high-quality healthcare services with compassion,
                professionalism, and dignity for every patient.
              </p>

            </div>

            <div className="bg-white p-8 rounded-xl shadow">

              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">
                Our Vision
              </h3>

              <p className="text-gray-600">
                To become the most trusted home healthcare provider by
                delivering reliable and affordable nursing services.
              </p>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}
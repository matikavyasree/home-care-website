import { Users, Clock3, BriefcaseMedical, Smile } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "500+",
    title: "Happy Patients",
  },
  {
    icon: Clock3,
    number: "24/7",
    title: "Support Available",
  },
  {
    icon: BriefcaseMedical,
    number: "9+",
    title: "Healthcare Services",
  },
  {
    icon: Smile,
    number: "100%",
    title: "Patient Satisfaction",
  },
];

export default function Statistics() {
  return (
    <section className="py-24 bg-[#1E3A8A]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div
          className="text-center mb-16"
          data-aos="fade-down"
        >
          <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold">
            OUR ACHIEVEMENTS
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6">
            Trusted by Hundreds of Families
          </h2>

          <p className="text-blue-100 mt-5 max-w-2xl mx-auto leading-8">
            We are proud to provide quality home healthcare services with
            compassion, professionalism, and dedication.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 150}
                className="text-center bg-white/5 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-3"
              >
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:scale-110">
                  <Icon className="w-10 h-10 text-white" />
                </div>

                <h2 className="text-5xl font-bold text-white">
                  {item.number}
                </h2>

                <p className="text-blue-100 mt-3 text-lg font-medium">
                  {item.title}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
import {
  ShieldCheck,
  Clock3,
  HeartHandshake,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Healthcare",
    description:
      "Experienced nurses and caregivers providing safe, compassionate care at your home.",
  },
  {
    icon: Clock3,
    title: "24/7 Availability",
    description:
      "We are available round the clock to support you whenever you need us.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Care",
    description:
      "Every patient receives individual attention and customized care plans.",
  },
  {
    icon: BadgeCheck,
    title: "Certified Professionals",
    description:
      "Our team consists of trained and experienced healthcare professionals.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div
          className="text-center max-w-3xl mx-auto mb-16"
          data-aos="fade-down"
        >
          <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full font-semibold text-sm">
            WHY CHOOSE US
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mt-6">
            Compassionate Care You Can Trust
          </h2>

          <p className="text-gray-600 mt-6 leading-8">
            We are committed to delivering quality home healthcare with
            experienced professionals, modern medical support, and compassionate
            service.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                data-aos="flip-left"
                data-aos-delay={index * 150}
                className="group bg-slate-50 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-3 transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mb-6 group-hover:bg-[#1E3A8A] transition-all duration-300">
                  <Icon className="w-10 h-10 text-red-600 group-hover:text-white transition-all duration-300" />
                </div>

                <h3 className="text-xl font-bold text-[#1E3A8A]">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
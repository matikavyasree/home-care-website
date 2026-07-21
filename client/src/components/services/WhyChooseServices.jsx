import {
  ShieldCheck,
  Clock3,
  HeartHandshake,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Care",
    description: "Experienced healthcare professionals providing safe and reliable home care.",
  },
  {
    icon: Clock3,
    title: "24/7 Support",
    description: "Available day and night whenever you need medical assistance.",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Staff",
    description: "We treat every patient with kindness and personalized attention.",
  },
  {
    icon: BadgeCheck,
    title: "Certified Professionals",
    description: "Qualified nurses and caregivers delivering quality healthcare.",
  },
];

export default function WhyChooseServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1E3A8A]">
            Why Choose Us
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We provide compassionate, professional, and trusted healthcare
            services at your doorstep.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-slate-50 rounded-3xl p-8 text-center hover:shadow-xl transition duration-300"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-red-100 flex items-center justify-center mb-6">
                  <Icon className="w-10 h-10 text-red-600" />
                </div>

                <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

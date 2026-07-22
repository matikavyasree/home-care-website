import { PhoneCall, CalendarCheck, UserRound, House } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Contact Us",
    description: "Call us or send an enquiry to discuss your healthcare needs.",
  },
  {
    icon: CalendarCheck,
    title: "Book an Appointment",
    description:
      "Choose a convenient date and time for home healthcare services.",
  },
  {
    icon: UserRound,
    title: "Professional Visit",
    description:
      "Our experienced healthcare professional visits your home.",
  },
  {
    icon: House,
    title: "Receive Quality Care",
    description:
      "Enjoy compassionate and professional care in the comfort of your home.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div
          className="text-center mb-16"
          data-aos="fade-down"
        >
          <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
            HOW IT WORKS
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mt-6">
            Getting Started is Easy
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto leading-8">
            We make home healthcare simple, convenient, and stress-free.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                className="bg-white rounded-3xl shadow-md p-8 text-center hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >
                <div className="w-20 h-20 bg-[#1E3A8A] rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-xl font-bold text-[#1E3A8A]">
                  {step.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {step.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
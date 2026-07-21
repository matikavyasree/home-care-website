import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Kumar",
    service: "Nursing Care",
    review:
      "Excellent home nursing service. The nurses were punctual, compassionate, and highly professional. My father's recovery was much smoother because of their dedicated care.",
  },
  {
    name: "Lakshmi Devi",
    service: "Elder Care",
    review:
      "The caregiver treated my mother with kindness and respect. We felt completely stress-free knowing she was in safe and caring hands every day.",
  },
  {
    name: "Suresh Reddy",
    service: "Physiotherapy",
    review:
      "The physiotherapist designed an excellent recovery plan after my surgery. I regained my strength much faster than expected.",
  },
  {
    name: "Anitha Rao",
    service: "ICU Care",
    review:
      "The ICU nurse was knowledgeable, calm, and attentive throughout the treatment. The quality of home care exceeded our expectations.",
  },
  {
    name: "Venkatesh",
    service: "Travel Attender",
    review:
      "The travel attender ensured a safe and comfortable hospital visit for my father. Everything was managed professionally from start to finish.",
  },
  {
    name: "Padma Priya",
    service: "Care Taker",
    review:
      "The caretaker became part of our family. She was patient, responsible, and always available whenever we needed assistance.",
  },
  {
    name: "Harish Kumar",
    service: "Doctor Consultation",
    review:
      "Booking a doctor consultation was very simple. The doctor patiently answered all our questions and provided excellent guidance.",
  },
  {
    name: "Sunitha Reddy",
    service: "Blood Test",
    review:
      "The blood sample collection was quick and hygienic. The reports were delivered on time, making the entire experience convenient.",
  },
  {
    name: "Madhavi",
    service: "First Aid & Treatment",
    review:
      "The medical team arrived quickly and provided immediate treatment. Their professionalism and friendly approach gave us confidence.",
  },
  {
    name: "Prakash",
    service: "Nursing Care",
    review:
      "The nurses monitored every detail of my recovery and always explained the treatment clearly. Their dedication was truly impressive.",
  },
  {
    name: "Kavitha",
    service: "Elder Care",
    review:
      "Our elderly grandmother received respectful and compassionate care. The caregiver ensured she was comfortable throughout the day.",
  },
  {
    name: "Sai Krishna",
    service: "Physiotherapy",
    review:
      "The physiotherapy sessions significantly reduced my back pain. The therapist was friendly, encouraging, and very experienced.",
  },
  {
    name: "Rani",
    service: "Doctor Consultation",
    review:
      "The consultation process was smooth and efficient. The doctor's advice helped us understand the treatment plan with confidence.",
  },
  {
    name: "Manoj Kumar",
    service: "ICU Care",
    review:
      "The ICU care team maintained excellent hygiene standards and provided continuous monitoring. We are grateful for their outstanding support.",
  },
  {
    name: "Savitri",
    service: "Care Taker",
    review:
      "The caretaker showed genuine compassion and dedication while assisting my husband during his recovery. We highly recommend this service.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div
          className="text-center mb-16"
          data-aos="fade-down"
        >
          <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
            TESTIMONIALS
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mt-6">
            What Our Patients Say
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-8">
            Our commitment to compassionate and professional home healthcare
            has earned the trust of hundreds of families.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >
              {/* Top */}
              <div className="flex justify-between items-center mb-5">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-red-200" />
              </div>

              {/* Review */}
              <p className="text-gray-600 italic leading-8 min-h-[160px]">
                "{item.review}"
              </p>

              {/* Patient */}
              <div className="mt-8 pt-5 border-t">
                <h4 className="text-lg font-bold text-[#1E3A8A]">
                  {item.name}
                </h4>

                <p className="text-[#E11D2E] font-medium mt-1">
                  {item.service}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
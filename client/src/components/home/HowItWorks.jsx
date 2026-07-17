import howItWorks from "../../data/howItWorks";

export default function HowItWorks() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-[#E11D2E] font-semibold uppercase tracking-widest">
            How It Works
          </p>

          <h2 className="text-4xl font-bold text-[#1E3A8A] mt-3">
            Get Home Care in 3 Simple Steps
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Booking a home care nurse is quick, simple, and hassle-free.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {howItWorks.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-red-100 flex items-center justify-center">
                  <Icon className="text-3xl text-[#E11D2E]" />
                </div>

                <h3 className="text-xl font-bold text-[#1E3A8A] mt-6">
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
import statistics from "../../data/statistics";

export default function Statistics() {
  return (
    <section className="py-20 bg-[#1E3A8A]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-red-300 uppercase tracking-widest font-semibold">
            Our Achievements
          </p>

          <h2 className="text-4xl font-bold text-white mt-3">
            Trusted Home Healthcare Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {statistics.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-red-100 flex items-center justify-center">
                  <Icon className="text-3xl text-[#E11D2E]" />
                </div>

                <h3 className="text-4xl font-bold text-[#1E3A8A] mt-6">
                  {item.value}
                </h3>

                <p className="text-gray-600 mt-3">
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
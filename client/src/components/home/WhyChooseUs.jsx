import whyChooseUs from "../../data/whyChooseUs";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-[#E11D2E] font-semibold uppercase tracking-widest">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-bold text-[#1E3A8A] mt-3">
            Caring Beyond Healthcare
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            We are committed to providing quality home healthcare with
            experienced professionals and compassionate support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {whyChooseUs.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="bg-[#F8FAFC] rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-red-100 flex items-center justify-center">
                  <Icon className="text-3xl text-[#E11D2E]" />
                </div>

                <h3 className="text-xl font-bold text-[#1E3A8A] mt-6">
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
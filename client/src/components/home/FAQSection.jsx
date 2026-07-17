import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import faqs from "../../data/faqs";

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center">
          <p className="text-[#E11D2E] uppercase tracking-widest font-semibold">
            FAQs
          </p>

          <h2 className="text-4xl font-bold text-[#1E3A8A] mt-3">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mt-5">
            Find answers to the most common questions about our services.
          </p>
        </div>

        <div className="mt-12 space-y-4">

          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border rounded-xl shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-semibold text-[#1E3A8A]">
                  {faq.question}
                </span>

                {openId === faq.id ? (
                  <FaMinus className="text-[#E11D2E]" />
                ) : (
                  <FaPlus className="text-[#E11D2E]" />
                )}
              </button>

              {openId === faq.id && (
                <div className="px-5 pb-5 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
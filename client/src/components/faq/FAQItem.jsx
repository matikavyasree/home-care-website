import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-xl shadow-sm bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-5 text-left"
      >
        <h3 className="font-semibold text-[#1E3A8A]">
          {faq.question}
        </h3>

        {open ? (
          <FaChevronUp className="text-[#E11D2E]" />
        ) : (
          <FaChevronDown className="text-[#E11D2E]" />
        )}
      </button>

      {open && (
        <div className="px-5 pb-5 text-gray-600">
          {faq.answer}
        </div>
      )}
    </div>
  );
}
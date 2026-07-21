import { FaPhoneAlt } from "react-icons/fa";

export default function CallButton() {
  return (
    <a
      href="tel:+918074172247"
      className="fixed bottom-24 right-6 bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-full shadow-xl z-50 transition duration-300 hover:scale-110"
    >
      <FaPhoneAlt size={22} />
    </a>
  );
}
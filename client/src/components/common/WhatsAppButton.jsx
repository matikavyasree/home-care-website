import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "918074172247"; // Replace with your WhatsApp number
  const message =
    "Hello! I would like to know more about your Home Care Nursing Services.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 animate-bounce">
        <MessageCircle className="w-8 h-8 text-white" />
      </div>
    </a>
  );
}
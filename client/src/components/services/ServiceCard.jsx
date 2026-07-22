export default function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300 text-center">

      {/* PNG Icon */}
      <div className="w-16 h-16 mx-auto rounded-full bg-red-100 flex items-center justify-center">
        <img
          src={service.icon}
          alt={service.title}
          className="w-10 h-10 object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-[#1E3A8A] mt-6">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mt-4 leading-7">
        {service.description}
      </p>

    </div>
  );
}
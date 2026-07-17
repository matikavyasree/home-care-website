export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300 text-center">

      <div className="w-16 h-16 mx-auto rounded-full bg-red-100 flex items-center justify-center">
        {Icon && <Icon className="text-3xl text-[#E11D2E]" />}
      </div>

      <h3 className="text-xl font-bold text-[#1E3A8A] mt-6">
        {service.title}
      </h3>

      <p className="text-gray-600 mt-4 leading-7">
        {service.description}
      </p>

    </div>
  );
}
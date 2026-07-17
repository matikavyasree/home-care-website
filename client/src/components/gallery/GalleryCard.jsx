export default function GalleryCard({ image }) {
  return (
    <div className="overflow-hidden rounded-xl shadow-lg group bg-white">
      <div className="overflow-hidden">
        <img
          src={image.image}
          alt={image.title}
          className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#1E3A8A]">
          {image.title}
        </h3>
      </div>
    </div>
  );
}
export default function GalleryCard({ image }) {
  return (
    <div className="overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-xl transition duration-300">
      <img
        src={image.image}
        alt={image.title}
        loading="lazy"
        className="w-full h-72 object-cover hover:scale-105 transition duration-500"
      />
    </div>
  );
}
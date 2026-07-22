export default function PageHeader({ title }) {
  return (
    <section className="bg-[#1E3A8A] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold text-white">
          {title}
        </h1>
      </div>
    </section>
  );
}
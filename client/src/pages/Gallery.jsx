import PageHeader from "../components/common/PageHeader";
import EmptyState from "../components/common/EmptyState";
import GalleryCard from "../components/gallery/GalleryCard";
import galleryData from "../data/gallery";

export default function Gallery() {
  if (galleryData.length === 0) {
    return (
      <>
        <PageHeader
          title="Gallery"
          breadcrumb="Home / Gallery"
        />

        <EmptyState message="No gallery images available." />
      </>
    );
  }

  return (
    <>
      <PageHeader
        title="Gallery"
        breadcrumb="Home / Gallery"
      />

      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryData.map((image) => (
              <GalleryCard
                key={image.id}
                image={image}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
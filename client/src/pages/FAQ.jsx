import PageHeader from "../components/common/PageHeader";
import EmptyState from "../components/common/EmptyState";
import FAQItem from "../components/faq/FAQItem";
import faqs from "../data/faqs";

export default function FAQ() {
  if (faqs.length === 0) {
    return (
      <>
        <PageHeader
          title="Frequently Asked Questions"
          breadcrumb="Home / FAQ"
        />

        <EmptyState message="No FAQs available." />
      </>
    );
  }

  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        breadcrumb="Home / FAQ"
      />

      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-5">
            {faqs.map((faq) => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
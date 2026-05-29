import { serviceCategories } from "@/data/services";

const StructuredData = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Buzz Genius",
    description:
      "Integrated marketing, media production, AI automation, branding, and growth systems for businesses and organizations.",
    url: typeof window !== "undefined" ? window.location.origin : "https://buzzgeniusinc.com",
    areaServed: "United States",
    serviceType: serviceCategories.map((s) => s.name),
    priceRange: "$$",
    paymentAccepted: "Credit Card, ACH, Stripe",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default StructuredData;

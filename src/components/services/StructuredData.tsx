import { serviceCategories } from "@/data/services";

const StructuredData = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Buzz Genius Inc.",
    legalName: "Buzz Genius Inc.",
    description:
      "Illinois professional services corporation providing business consulting and strategic advisory to entrepreneurs, small businesses, and independent professionals.",
    url: "https://buzzgeniusinc.com",
    areaServed: "United States",
    serviceType: serviceCategories.map((s) => s.name),
    priceRange: "$$",
    paymentAccepted: "Stripe, ACH, Electronic Transfer, Check",
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
};

export default StructuredData;

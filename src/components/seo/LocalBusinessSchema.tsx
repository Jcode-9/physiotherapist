import { contactData } from "@/data/contact";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physiotherapy",
    name: "PhysioPro",
    description:
      "Profesjonalna fizjoterapia, rehabilitacja i terapia manualna.",
    telephone: contactData.phone,
    email: contactData.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contactData.address.street,
      addressLocality: contactData.address.city,
      addressCountry: contactData.address.country,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}